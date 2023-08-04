import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesviewComponent } from './salesview.component';

describe('SalesviewComponent', () => {
  let component: SalesviewComponent;
  let fixture: ComponentFixture<SalesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
