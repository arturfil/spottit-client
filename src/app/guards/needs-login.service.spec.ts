import { TestBed, inject } from '@angular/core/testing';

import { NeedsLoginService } from './needs-login.service';

describe('NeedsLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeedsLoginService]
    });
  });

  it('should be created', inject([NeedsLoginService], (service: NeedsLoginService) => {
    expect(service).toBeTruthy();
  }));
});
