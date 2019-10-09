import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBlockComponent } from './svg-block.component';

describe('SvgBlockComponent', () => {
  let component: SvgBlockComponent;
  let fixture: ComponentFixture<SvgBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
