import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { map, tap } from 'rxjs';
import { GithubService, GithubUser } from './services/github.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username: string = '';
  user!: GithubUser;

  constructor(
    private githubService: GithubService
  ) {}

  getUser() {
    return this.githubService
      .getUser(this.username)
      .pipe(
        map((user) => user),
        tap({
          next: (user) => {
            this.user = user;
          }
        })
      );
  }
}
