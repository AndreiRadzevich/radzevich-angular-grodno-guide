import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedCardsComponent } from './viewed-cards.component';

describe('ViewedCardsComponent', () => {
  let component: ViewedCardsComponent;
  let fixture: ComponentFixture<ViewedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
