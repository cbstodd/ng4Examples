import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgaLoginFormComponent } from './aga-login-form.component';

describe('AgaLoginFormComponent', () => {
  let component: AgaLoginFormComponent;
  let fixture: ComponentFixture<AgaLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgaLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgaLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
