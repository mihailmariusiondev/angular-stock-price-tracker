import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetButtonsComponent } from './widget-buttons.component';

describe('WidgetButtonsComponent', () => {
  let component: WidgetButtonsComponent;
  let fixture: ComponentFixture<WidgetButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
