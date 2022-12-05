import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStockComponent } from './company-stock.component';

describe('CompanyStockComponent', () => {
  let component: CompanyStockComponent;
  let fixture: ComponentFixture<CompanyStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
