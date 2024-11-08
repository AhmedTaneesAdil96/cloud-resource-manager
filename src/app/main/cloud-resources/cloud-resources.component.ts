import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { VNetComponent } from '../vnet/vnet.component';
import { TreeRepresentationService } from '../../service';
import { MatDialog } from '@angular/material/dialog';
import {
  ObservableDestroyerDirective,
  ResourceDialogComponent,
} from '../../shared';
import { RESOURCE_TYPES } from '../../../libs';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-cloud-resources',
  templateUrl: './cloud-resources.component.html',
  styleUrls: ['./cloud-resources.component.scss'],
})
export class CloudResourcesComponent
  extends ObservableDestroyerDirective
  implements OnInit
{
  cloudForm: FormGroup;
  RESOURCE_TYPES = RESOURCE_TYPES;
  @ViewChild(VNetComponent) vnetComponent: VNetComponent | undefined;

  constructor(
    private fb: FormBuilder,
    private treeService: TreeRepresentationService,
    public dialog: MatDialog,
  ) {
    super();
    this.cloudForm = this.fb.group({
      vnets: this.fb.array([]) as FormArray,
    });
  }

  get vnets(): FormArray {
    return this.cloudForm.get('vnets') as FormArray;
  }

  addVNet(result: any): void {
    const vnetForm = this.fb.group({
      resourceName: [result.resourceName],
      resourceType: [RESOURCE_TYPES.VNET],
      subnets: this.fb.array([]) as FormArray,
      tags: result.tags,
    });
    this.vnets.push(vnetForm);
  }

  removeVNet(index: number): void {
    this.vnets.removeAt(index);
  }

  addSubnet(vnetIndex: number): void {
    const vnetForm = this.vnets.at(vnetIndex) as FormGroup;
    const subnets = vnetForm.get('subnets') as FormArray;
    const subnetForm = this.fb.group({
      resourceName: [''],
      resourceType: [RESOURCE_TYPES.SUBNET],
    });
    subnets.push(subnetForm);
  }

  ngOnInit(): void {
    this.cloudForm.valueChanges
      .pipe(takeUntil(this.$destroyer))
      .subscribe(() => {
        this.updateDynamicJson();
      });
    this.populateForm(this.treeService.dynamicJson);
  }

  populateForm(data: any): void {
    data.vnets?.forEach((vnet: any) => {
      const vnetGroup = this.fb.group({
        resourceName: [vnet.resourceName],
        resourceType: [vnet.resourceType],
        subnets: this.fb.array([]),
      });

      vnet.subnets.forEach((subnet: any) => {
        const subnetGroup = this.fb.group({
          resourceName: [subnet.resourceName || ''],
          resourceType: [subnet.resourceType || ''],
          nics: this.fb.array([]),
        });

        subnet.nics.forEach((nic: any) => {
          const nicGroup = this.fb.group({
            resourceName: [nic.resourceName || ''],
            resourceType: [nic.resourceType || ''],
          });
          (subnetGroup.get('nics') as FormArray).push(nicGroup);
        });

        (vnetGroup.get('subnets') as FormArray).push(subnetGroup);
      });

      this.vnets.push(vnetGroup);
    });
  }

  updateDynamicJson(): void {
    this.treeService.dynamicJson = {
      vnets: this.buildJsonFromFormArray(this.vnets),
    };
    console.log('Updated JSON:', this.treeService.dynamicJson);
  }

  openResourceDialog(type: string, parentIndex?: number): void {
    const dialogRef = this.dialog.open(ResourceDialogComponent, {
      data: { type: RESOURCE_TYPES.VNET },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.$destroyer))
      .subscribe((result) => {
        if (result) {
          if (type === RESOURCE_TYPES.VNET) {
            this.addVNet(result);
          } else if (
            type === RESOURCE_TYPES.SUBNET &&
            parentIndex !== undefined
          ) {
            this.addSubnet(parentIndex);
          }
        }
      });
  }

  private buildJsonFromFormArray(formArray: FormArray): any[] {
    return formArray.controls.map((formGroup) => {
      const groupValue = { ...formGroup.value };
      Object.keys(groupValue).forEach((key) => {
        if (groupValue[key] instanceof FormArray) {
          groupValue[key] = this.buildJsonFromFormArray(groupValue[key]);
        }
      });
      return groupValue;
    });
  }
}
