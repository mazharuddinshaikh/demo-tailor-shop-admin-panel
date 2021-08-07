import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtsHeaderComponent } from './dts-header.component';

describe('DtsHeaderComponent', () => {
  let component: DtsHeaderComponent;
  let fixture: ComponentFixture<DtsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
