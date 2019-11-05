import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricContentComponent } from './rubric-content.component';



describe('RubricContentComponent', () => {
  let component: RubricContentComponent;
  let fixture: ComponentFixture<RubricContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




