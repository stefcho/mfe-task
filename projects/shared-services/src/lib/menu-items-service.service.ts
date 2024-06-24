import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuItemsServiceService {
  // subject to subscribe to with active header menu items config
  private _menuItems: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);

  public readonly menuItems: Observable<string[]> = this._menuItems.asObservable();

  get componentTypes(): string[] {
    return this._componentTypes;
  }

  set componentTypes(value: string[]) {
    this._componentTypes = value;
  }

  // dummy data for a list of available components
  private _componentTypes: string[] = [
    'printButton',
    'emailButton',
    'downloadButton',
    'uploadButton',
  ];

  constructor() { }

  public getAllComponentTypes() {
    return this._componentTypes;
  }

  // Fake method to simulate response with some component schema coming from the backend
  public getRandomConfig(): string[] {
    let newArr: string[] = [];
    // get a random count between 1 and 4
    let randomItemCount = Math.floor(Math.random() * 4) + 1;

    // pick items randomly from the list
    for (let i = 0; i < randomItemCount; i++) {
      let newElem = this._componentTypes[Math.floor(Math.random() * this._componentTypes.length)];
      while (newArr.includes(newElem)) {
        newElem = this._componentTypes[Math.floor(Math.random() * this._componentTypes.length)];
      }
      newArr.push(newElem);
    }
    return newArr;
  }

  // set the header menu configuration with a new random list of buttons to display in the header
  public setNewConfig() {
    let newArr = this.getRandomConfig();
    this._menuItems.next(newArr);
  }
}
