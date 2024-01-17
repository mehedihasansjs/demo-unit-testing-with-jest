import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of, take, tap } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let mockGithubService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        AppComponent,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: 'GithubService',
          useValue: mockGithubService
        }
      ]
    }).compileComponents();

    mockGithubService = {
      getUser: jest.fn()
    };
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have empty username', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.username).toEqual('');
  });

  it('should have empty user', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.user).toBeUndefined();
  });

  it('should have username: octcat', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.username = 'octcat';
    expect(app.username).toEqual('octcat');
  });

  it('should have user.login: octcat', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.username = 'octcat';

    // in this stage, getUser should not be called yet
    expect(mockGithubService.getUser).toHaveBeenCalledTimes(0);

    jest.spyOn(mockGithubService, 'getUser').mockReturnValue(of({
      id: 1,
      login: 'octcat'
    }));

    app.getUser()
      .pipe(
        take(1),
        tap((user) => {
          // getUser should be called once with username: octcat
          expect(mockGithubService.getUser).toHaveBeenCalledWith('octcat');
          expect(mockGithubService.getUser).toHaveBeenCalledTimes(1);

          // user should be defined and login should be octcat
          expect(user).toBeDefined();
          expect(user?.login).toEqual('octcat');
        })
      )
      .subscribe();
  });

});
