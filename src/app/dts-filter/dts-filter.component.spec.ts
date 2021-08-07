import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtsFilterComponent } from './dts-filter.component';

describe('DtsFilterComponent', () => {
  let component: DtsFilterComponent;
  let fixture: ComponentFixture<DtsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
