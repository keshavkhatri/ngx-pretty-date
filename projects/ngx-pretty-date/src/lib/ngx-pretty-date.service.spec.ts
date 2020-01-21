import { TestBed } from '@angular/core/testing';

import { NgxPrettyDateService } from './ngx-pretty-date.service';

describe('NgxPrettyDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPrettyDateService = TestBed.get(NgxPrettyDateService);
    expect(service).toBeTruthy();
  });
});
