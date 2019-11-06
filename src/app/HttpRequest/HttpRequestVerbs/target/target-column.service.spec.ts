import { TestBed } from '@angular/core/testing';

import { TargetColumnService } from './target-column.service';

describe('TargetColumnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetColumnService = TestBed.get(TargetColumnService);
    expect(service).toBeTruthy();
  });
});
