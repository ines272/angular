import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Header } from './header/header';
import { ConferenceList } from './conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectAngular22');
}
