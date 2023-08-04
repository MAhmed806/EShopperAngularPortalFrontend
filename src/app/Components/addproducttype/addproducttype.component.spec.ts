import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproducttypeComponent } from './addproducttype.component';

describe('AddproducttypeComponent', () => {
  let component: AddproducttypeComponent;
  let fixture: ComponentFixture<AddproducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproducttypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
