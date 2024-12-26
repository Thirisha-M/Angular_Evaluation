import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualaddtocartComponent } from './individualaddtocart.component';

describe('IndividualaddtocartComponent', () => {
  let component: IndividualaddtocartComponent;
  let fixture: ComponentFixture<IndividualaddtocartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualaddtocartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualaddtocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
