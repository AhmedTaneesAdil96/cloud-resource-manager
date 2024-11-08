import { TestBed } from '@angular/core/testing';

import { TreeRepresentationService } from './tree-representation.service';

describe('TreeRepresentationService', () => {
  let service: TreeRepresentationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeRepresentationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
