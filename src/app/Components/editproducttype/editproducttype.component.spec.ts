import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproducttypeComponent } from './editproducttype.component';

describe('EditproducttypeComponent', () => {
  let component: EditproducttypeComponent;
  let fixture: ComponentFixture<EditproducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproducttypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
