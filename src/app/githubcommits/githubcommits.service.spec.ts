import { TestBed, inject } from '@angular/core/testing';

import { GithubcommitsService } from './githubcommits.service';

describe('GithubcommitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubcommitsService]
    });
  });

  it('should be created', inject([GithubcommitsService], (service: GithubcommitsService) => {
    expect(service).toBeTruthy();
  }));
});
