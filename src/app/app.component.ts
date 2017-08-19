import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <nav>
      <a routerLink="/a" routerLinkActive="active">A Component</a>
      <a routerLink="/b" routerLinkActive="active">B Component</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
