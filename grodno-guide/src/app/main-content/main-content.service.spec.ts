import { TestBed } from '@angular/core/testing';

import { MainContentService } from './main-content.service';

describe('MainContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainContentService = TestBed.get(MainContentService);
    expect(service).toBeTruthy();
  });
});
