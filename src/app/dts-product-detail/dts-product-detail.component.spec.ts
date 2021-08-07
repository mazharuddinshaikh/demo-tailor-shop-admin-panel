import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtsProductDetailComponent } from './dts-product-detail.component';

describe('DtsProductDetailComponent', () => {
  let component: DtsProductDetailComponent;
  let fixture: ComponentFixture<DtsProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtsProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtsProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
