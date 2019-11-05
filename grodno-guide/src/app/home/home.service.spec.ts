import {HttpClient, HttpResponse} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';

import {of} from 'rxjs';
import {HomeService} from './home.service';


function createResponse(data) {
  return of(
    data
  );
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

const rubrics = [{rubric: 'eat', filters: ['Restaurants', 'Cafes', 'Nightlife']}, {
  rubric: 'see',
  filters: ['Activities', 'Attractions', 'Shopping']
}];
const details = [{
  filters: ['Restaurants', 'Cafes', 'Nightlife'],
  rubric: 'eat',
  details: [{
    image: 'Restaurants',
    title: 'Jane Smith',
    description: 'Jane',
  }]
}, {
  filters: ['City', 'Nature', 'Region'],
  rubric: 'guides',
  details: [{
    image: 'Restaurants',
    title: 'Jane Smith',
    description: 'Jane',
  }]
}
];

describe('HomeService', () => {

  let service: HomeService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        HomeService,
        {provide: HttpClient, useClass: MockHttp}
      ]
    });
    http = bed.get(HttpClient);
    service = bed.get(HomeService);
  });

  it('should get rubric', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...rubrics]));

    service.getRubrics('rubric')
      .subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(rubrics);
      });
  });

  it('should get details', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...details]));

    service.getFolder('eat', 'details')
      .subscribe((result) => {
        expect(result.rubric).toBe('eat');
        expect(result).toEqual(details);
      });
  });

});
