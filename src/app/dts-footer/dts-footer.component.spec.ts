import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtsFooterComponent } from './dts-footer.component';

describe('DtsFooterComponent', () => {
  let component: DtsFooterComponent;
  let fixture: ComponentFixture<DtsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
