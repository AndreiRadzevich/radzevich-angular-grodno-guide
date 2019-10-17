import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonShowMoreComponent } from './botton-show-more.component';

describe('BottonShowMoreComponent', () => {
  let component: BottonShowMoreComponent;
  let fixture: ComponentFixture<BottonShowMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottonShowMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottonShowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
