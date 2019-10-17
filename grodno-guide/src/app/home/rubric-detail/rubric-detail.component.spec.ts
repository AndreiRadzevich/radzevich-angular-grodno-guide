import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricDetailComponent } from './rubric-detail.component';

describe('RubricDetailComponent', () => {
  let component: RubricDetailComponent;
  let fixture: ComponentFixture<RubricDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
