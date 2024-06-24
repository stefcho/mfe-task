import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuItemsServiceService {
  private _menuItems: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);

  public readonly menuItems: Observable<string[]> = this._menuItems.asObservable();

  get componentTypes(): string[] {
    return this._componentTypes;
  }

  set componentTypes(value: string[]) {
    this._componentTypes = value;
  }

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

  // set the header menu configuration with a new random list of buttons
  public setNewConfig() {
    let newArr = this.getRandomConfig();
    this._menuItems.next(newArr);
  }
}
