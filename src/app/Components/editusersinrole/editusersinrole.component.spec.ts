import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusersinroleComponent } from './editusersinrole.component';

describe('EditusersinroleComponent', () => {
  let component: EditusersinroleComponent;
  let fixture: ComponentFixture<EditusersinroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusersinroleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditusersinroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
