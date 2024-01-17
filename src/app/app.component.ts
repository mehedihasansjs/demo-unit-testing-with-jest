import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { GithubService, GithubUser } from './services/github.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  username: string = '';
  user!: GithubUser;

  constructor(
    private githubService: GithubService
  ) {}

  getUser() {
    this.githubService
      .getUser(this.username)
      .pipe(
        tap({
          next: (user) => {
            this.user = user;
          }
        })
      )
      .subscribe();
  }
}
