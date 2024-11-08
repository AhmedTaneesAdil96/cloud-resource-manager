import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NICComponent } from './nic.component';

describe('NICComponent', () => {
  let component: NICComponent;
  let fixture: ComponentFixture<NICComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NICComponent]
    });
    fixture = TestBed.createComponent(NICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
