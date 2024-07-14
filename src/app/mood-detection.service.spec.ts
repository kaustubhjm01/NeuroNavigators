import { TestBed } from '@angular/core/testing';

import { MoodDetectionService } from './mood-detection.service';

describe('MoodDetectionService', () => {
  let service: MoodDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoodDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
