import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricNavComponent } from './rubric-nav.component';

describe('RubricNavComponent', () => {
  let component: RubricNavComponent;
  let fixture: ComponentFixture<RubricNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
