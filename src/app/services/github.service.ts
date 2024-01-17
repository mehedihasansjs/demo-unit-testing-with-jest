import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`https://api.github.com/users/${username}`);
  }
}

export class GithubUser {
  id?: number;
  login?: string;
}
