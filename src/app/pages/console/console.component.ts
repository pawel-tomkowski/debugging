import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HeaderTitleService } from 'src/app/header-title.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
})
export class ConsoleComponent {
  showConsoleCount = false;
  index = 0;

  titleService = inject(HeaderTitleService);

  constructor() {
    this.titleService.setTitle('Console');
    console.log(console);
    setInterval(() => {
      this.index++;
    }, 500);
  }

  consoleTimeClick(): void {
    console.time('start');
    for (let i = 0; i < 10000000; i++) {
      i * i;
      JSON.stringify({ test: (i * i) / 2 });
    }
    console.timeEnd('start');
  }

  consoleGroupClick(): void {
    console.log('This is the outer level');
    console.group();
    console.log('Level 2');
    console.group();
    console.log('Level 3');
    console.warn('More of level 3');
    console.groupEnd();
    console.log('Back to level 2');
    console.groupEnd();
    console.log('Back to the outer level');
  }

  consoleTableClick(): void {
    console.table([
      { name: 'John', age: 25 },
      { name: 'Jane', age: 24 },
      { name: 'Janet', age: 26 },
    ]);
  }

  consoleCountClick(): void {
    console.count();
  }
}
