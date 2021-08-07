import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtsHomeComponent } from './dts-home.component';

describe('DtsHomeComponent', () => {
  let component: DtsHomeComponent;
  let fixture: ComponentFixture<DtsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
