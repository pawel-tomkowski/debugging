import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-wrong',
  templateUrl: './change-detection-wrong.component.html',
  styleUrls: ['./change-detection-wrong.component.scss'],
})
export class ChangeDetectionWrongComponent {
  index = 0;
  constructor(cd: ChangeDetectorRef) {
    setInterval(() => {
      this.index++;
      JSON.stringify({ test: this.index });
      cd.detectChanges();
    }, 500);
  }
}
