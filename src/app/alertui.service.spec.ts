import { TestBed } from '@angular/core/testing';

import { AlertuiService } from './alertui.service';

describe('AlertuiService', () => {
  let service: AlertuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
