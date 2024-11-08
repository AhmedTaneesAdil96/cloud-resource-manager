import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTreeComponent } from './resource-tree.component';

describe('ResourceTreeComponent', () => {
  let component: ResourceTreeComponent;
  let fixture: ComponentFixture<ResourceTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResourceTreeComponent]
    });
    fixture = TestBed.createComponent(ResourceTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
