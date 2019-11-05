import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RubricFilterComponent } from './rubric-filter.component';
import {ContentService} from '../content.service';
import { of } from 'rxjs';


class MockContentService {
  public filtersChanged =  of(['Test1' , 'Test2', 'Test3']);
}

describe('RubricFilterComponent', () => {
  let component: RubricFilterComponent;
  let fixture: ComponentFixture<RubricFilterComponent>;
  let el: DebugElement;
  let service: ContentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricFilterComponent ],
      providers: [
        { provide: ContentService, useClass: MockContentService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricFilterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    service = el.injector.get(ContentService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get filters on init', () => {
    spyOn(service, 'getFilters').and.callThrough();
    component.ngOnInit();
    expect(service.filtersChanged).toHaveBeenCalled();
    expect(service.getFilters).toHaveBeenCalled();
  });

  it('should get filters from AppService getData()', async(() => {
    component.ngOnInit();
    fixture.whenStable().then(() => {
      expect(component.filters).toEqual(['Test1' , 'Test2', 'Test3']);
    });
  }));
  it('should set filters of cards ', () => {
    spyOn(component, 'setFilterCards');
    component.ngOnInit();
    expect(component.setFilterCards).toHaveBeenCalledWith('Cafe');
    expect(component.setFilterCards).toHaveBeenCalledWith('Nightlife');
  });
});
