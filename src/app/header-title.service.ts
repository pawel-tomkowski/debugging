import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleService {
  title$ = new BehaviorSubject('Angular Ngrx Example');
  constructor() {}

  setTitle(title: string) {
    //debugger;
    this.title$.next(title);
  }
}
