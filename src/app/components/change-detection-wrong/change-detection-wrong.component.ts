import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-wrong',
  templateUrl: './change-detection-wrong.component.html',
  styleUrls: ['./change-detection-wrong.component.scss'],
})
export class ChangeDetectionWrongComponent {
  index = 0;
  table: { id: number; name: string }[] = [];
  constructor(cd: ChangeDetectorRef) {
    setInterval(() => {
      this.index++;
      JSON.stringify({ test: this.index });
      this.table = [];
      for (let i = 0; i < 100; i++) {
        this.table.push({ id: i + Math.random(), name: `name${i}` });
      }

      cd.detectChanges();
    }, 1000);
  }
}
