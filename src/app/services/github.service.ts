import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.configService.getApiUrl()}/users/${username}`);
  }
}

export class GithubUser {
  id?: number;
  login?: string;
}
