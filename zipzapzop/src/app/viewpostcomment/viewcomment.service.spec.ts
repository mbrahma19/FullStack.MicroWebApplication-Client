import { TestBed } from '@angular/core/testing';

import { ViewcommentService } from './viewcomment.service';

describe('ViewcommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewcommentService = TestBed.get(ViewcommentService);
    expect(service).toBeTruthy();
  });
});
