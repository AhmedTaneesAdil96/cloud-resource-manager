import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudResourcesComponent } from './cloud-resources.component';

describe('CloudResourcesComponent', () => {
  let component: CloudResourcesComponent;
  let fixture: ComponentFixture<CloudResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CloudResourcesComponent]
    });
    fixture = TestBed.createComponent(CloudResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
