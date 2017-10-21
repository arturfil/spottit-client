import { TestBed, inject } from '@angular/core/testing';

import { SpotApiService } from './spot-api.service';

describe('SpotApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotApiService]
    });
  });

  it('should be created', inject([SpotApiService], (service: SpotApiService) => {
    expect(service).toBeTruthy();
  }));
});
