import { TestBed } from '@angular/core/testing';

import { SlicerService } from './slicer.service';

describe('SlicerService', () => {
  let service: SlicerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlicerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
