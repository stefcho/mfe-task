import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  NgModuleRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MenuItemsServiceService } from "shared-services";
import {CommonModule} from "@angular/common";
import {
  DownloadButtonComponent,
  EmailButtonComponent,
  PrintButtonComponent,
  UploadButtonComponent
} from "design-components";

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent implements AfterViewInit {
  @ViewChild('menuItems', { static: true, read: ViewContainerRef })
  menuItems!: ViewContainerRef;

  dynamicComponentMap: {[index: string]:any} = {
    'printButton': PrintButtonComponent,
    'emailButton': EmailButtonComponent,
    'downloadButton': DownloadButtonComponent,
    'uploadButton': UploadButtonComponent
  };



  public menuItemsList: string[] = [];

  constructor(
    private headerMenuService: MenuItemsServiceService,
    private cdr: ChangeDetectorRef
  ) {
    this.menuItemsList = this.headerMenuService.getRandomConfig();
    this.renderMenuItems(this.menuItemsList)
    this.headerMenuService.menuItems.subscribe(val => {
      this.renderMenuItems(val);
    })
  }

  private renderMenuItems(menuItemsList: string[]) {
    if (this.menuItems) {
      this.menuItems.clear();
      for (let menuItem of menuItemsList) {

        const component = this.dynamicComponentMap[menuItem];

        this.menuItems.createComponent<typeof component>(component);

        // run change detection in the component and child components
        this.cdr.detectChanges();
      }

    }

  }

  ngAfterViewInit() {
    this.renderMenuItems(this.menuItemsList);
  }
}
