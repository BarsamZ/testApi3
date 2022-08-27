import { TestBed } from '@angular/core/testing';

import { Users.ApiService } from './users.api.service';

describe('Users.ApiService', () => {
  let service: Users.ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users.ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
