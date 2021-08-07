import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtsSigninComponent } from './dts-signin.component';

describe('DtsSigninComponent', () => {
  let component: DtsSigninComponent;
  let fixture: ComponentFixture<DtsSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtsSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtsSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
