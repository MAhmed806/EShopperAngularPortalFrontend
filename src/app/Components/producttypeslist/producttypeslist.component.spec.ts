import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttypeslistComponent } from './producttypeslist.component';

describe('ProducttypeslistComponent', () => {
  let component: ProducttypeslistComponent;
  let fixture: ComponentFixture<ProducttypeslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttypeslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducttypeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
