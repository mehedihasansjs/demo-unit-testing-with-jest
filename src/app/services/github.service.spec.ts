import { HttpStatusCode } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { tap } from 'rxjs';

import { GithubService, GithubUser } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let controller: HttpTestingController;
  let mockConfigService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: 'ConfigService',
          useValue: mockConfigService
        }
      ]
    });
    service = TestBed.inject(GithubService);
    controller = TestBed.inject(HttpTestingController);

    // mock the ConfigService
    mockConfigService = {
      getApiUrl: jest.fn()
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUser', () => {
    it('should return a user', () => {
      const username = faker.internet.userName();

      // make mock response
      const user: GithubUser = {
        id: faker.number.int(),
        login: username,
      };


      // make the request
      service
        .getUser(username)
        .pipe(
          tap((response) => {
            expect(response).toEqual(user);
          })
        )
        .subscribe();

      // check if the request was made
      const apiUrl = 'https://api.github.com';
      jest.spyOn(mockConfigService, 'getApiUrl').mockReturnValue(apiUrl);
      const request: TestRequest = controller.expectOne(`${apiUrl}/users/${username}`);

      // mock the response
      request.flush(user);
    });

    it('should throw an error', () => {
      const username = faker.internet.userName();

      // make mock error response
      const error = {
        message: 'Not Found',
        documentation_url: 'https://docs.github.com/rest/reference/users#get-a-user'
      };


      // make the request
      service
        .getUser(username)
        .pipe(
          tap({
            error: (err) => {
              expect(err).toEqual(error);
            }
          })
        )
        .subscribe();

      // check if the request was made
      const apiUrl = 'https://api.github.com';
      jest.spyOn(mockConfigService, 'getApiUrl').mockReturnValue(apiUrl);
      const request: TestRequest = controller.expectOne(`${apiUrl}/users/${username}`);

      // mock the response
      request.flush(error, {
        status: HttpStatusCode.NotFound,
        statusText: 'Not Found'
      });
    });
  });

});
