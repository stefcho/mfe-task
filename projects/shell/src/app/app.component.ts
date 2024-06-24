import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {HeaderMenuComponent} from "./header-menu/header-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavigationComponent, HeaderMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';
}
