import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatPageComponent } from './eat-page.component';

describe('EatPageComponent', () => {
  let component: EatPageComponent;
  let fixture: ComponentFixture<EatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
