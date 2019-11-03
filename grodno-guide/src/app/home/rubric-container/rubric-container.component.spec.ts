import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricContainerComponent } from './rubric-container.component';

describe('RubricContainerComponent', () => {
  let component: RubricContainerComponent;
  let fixture: ComponentFixture<RubricContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
