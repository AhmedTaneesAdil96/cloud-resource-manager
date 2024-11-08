import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VNetComponent } from './vnet.component';

describe('VNetComponent', () => {
  let component: VNetComponent;
  let fixture: ComponentFixture<VNetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VNetComponent]
    });
    fixture = TestBed.createComponent(VNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
