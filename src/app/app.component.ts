import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <!-- Add navigation menu items -->
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/questions">Questions</a></li>
        <li><a routerLink="/ask">Ask Question</a></li>
        <li><a routerLink="/login">Login</a></li>
        <li><a routerLink="/signup">Sign Up</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>

    <footer>
      <!-- Add footer content -->
      <p>&copy; 2023 Your App. All rights reserved.</p>
    </footer>
  `,
  styles: [
    `
      nav {
        background-color: #333;
        padding: 10px;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: inline;
        margin-right: 10px;
      }

      a {
        color: #fff;
        text-decoration: none;
      }

      footer {
        background-color: #f4f4f4;
        padding: 10px;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Your App';
}