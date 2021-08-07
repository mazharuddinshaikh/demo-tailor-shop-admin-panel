import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtsProductComponent } from './dts-product.component';

describe('DtsProductComponent', () => {
  let component: DtsProductComponent;
  let fixture: ComponentFixture<DtsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtsProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
