import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionWrongComponent } from './change-detection-wrong.component';

describe('ChangeDetectionWrongComponent', () => {
  let component: ChangeDetectionWrongComponent;
  let fixture: ComponentFixture<ChangeDetectionWrongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDetectionWrongComponent]
    });
    fixture = TestBed.createComponent(ChangeDetectionWrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
