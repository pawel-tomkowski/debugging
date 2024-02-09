import { Component, OnInit, inject } from '@angular/core';
import { HeaderTitleService } from './header-title.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'debugging';

  navbarOpen = false;

  titleService = inject(HeaderTitleService);
  title$ = this.titleService.title$;

  router = inject(Router);

  constructor() {
    this.titleService.setTitle('Angular Ngrx Example');
  }

  ngOnInit() {
    this.router.events.pipe(debounceTime(5000)).subscribe((event) => {
      this.titleService.setTitle(new Date().toTimeString());
    });
  }
}
