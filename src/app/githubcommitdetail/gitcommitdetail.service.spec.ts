import { TestBed, inject } from '@angular/core/testing';

import { GitcommitdetailService } from './gitcommitdetail.service';

describe('GitcommitdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitcommitdetailService]
    });
  });

  it('should be created', inject([GitcommitdetailService], (service: GitcommitdetailService) => {
    expect(service).toBeTruthy();
  }));
});
