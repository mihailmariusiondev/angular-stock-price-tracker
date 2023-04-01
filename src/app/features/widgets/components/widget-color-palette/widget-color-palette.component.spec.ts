import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetColorPaletteComponent } from './widget-color-palette.component';

describe('WidgetColorPaletteComponent', () => {
  let component: WidgetColorPaletteComponent;
  let fixture: ComponentFixture<WidgetColorPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetColorPaletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
