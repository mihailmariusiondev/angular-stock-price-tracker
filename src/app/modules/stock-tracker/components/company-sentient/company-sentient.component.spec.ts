import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySentientComponent } from './company-sentient.component';

describe('CompanySentientComponent', () => {
  let component: CompanySentientComponent;
  let fixture: ComponentFixture<CompanySentientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySentientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySentientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
