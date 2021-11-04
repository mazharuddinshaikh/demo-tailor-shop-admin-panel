import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtsSignOutComponent } from './dts-sign-out.component';

describe('DtsSignOutComponent', () => {
  let component: DtsSignOutComponent;
  let fixture: ComponentFixture<DtsSignOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtsSignOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtsSignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
