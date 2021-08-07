import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtsMainComponent } from './dts-main.component';

describe('DtsMainComponent', () => {
  let component: DtsMainComponent;
  let fixture: ComponentFixture<DtsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
