import { Component, signal } from '@angular/core';
import { Nav } from './features/nav/nav';
import { LandingPage } from './features/landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [Nav, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cremaida');
}
