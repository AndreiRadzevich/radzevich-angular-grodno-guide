import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {RubricContentComponent} from './rubric-content.component';
import {ContentService} from '../content.service';
import {ViewedCardService} from './viewed-cards/viewed-card.service';
import {of} from 'rxjs';

class MockContentService {

  public filtersCardsChanged = of([{filters: ['Test1', 'Test2'], rubric: 'eat', details: []}, {
    filters: ['Test1', 'Test2'],
    rubric: 'eat',
    details: []
  }]);

  public getFilterCards() {
    return [{filters: ['Test1', 'Test2'], rubric: 'eat', details: []},
      {filters: ['Test1', 'Test2'], rubric: 'eat', details: []}];
  }
}

describe('RubricContentComponent', () => {
  let component: RubricContentComponent;
  let fixture: ComponentFixture<RubricContentComponent>;
  let el: DebugElement;
  let contentService: ContentService;
  let viewedCardService: ViewedCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubricContentComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: ContentService, useClass: MockContentService},
        {provide: ViewedCardService}
      ]
    });
    fixture = TestBed.createComponent(RubricContentComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    contentService = el.injector.get(ContentService);
    viewedCardService = el.injector.get(ViewedCardService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get filters of cards on init', () => {
    component.ngOnInit();
    expect(contentService.filtersCardsChanged).toHaveBeenCalled();
  });

  it('should get filters of cards from the service response', () => {
    component.ngOnInit();
    expect(component.filterCards).toBe(
      [{filters: ['Test1', 'Test2'], rubric: 'eat', details: ['Test1', 'Test2']}]);
  });

  it('should get card', () => {
    component.ngOnInit();
    expect(component.getDetails).toHaveBeenCalledWith({filters: ['Test1', 'Test2'], rubric: 'eat', details: ['Test1', 'Test2']});
  });
});




