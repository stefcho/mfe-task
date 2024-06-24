import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PrintButtonComponent} from "design-components";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    RouterLinkActive,
    PrintButtonComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  public urlParam: string = 'dummy';

}
