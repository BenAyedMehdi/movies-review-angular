import { TestBed } from '@angular/core/testing';

import { StorageMoviesService } from './storage-movies.service';

describe('StorageMoviesService', () => {
  let service: StorageMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
