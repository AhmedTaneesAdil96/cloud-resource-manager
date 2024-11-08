import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { RESOURCE_TYPES } from '../../../../libs';

@Component({
  selector: 'app-subnet',

  templateUrl: './subnet.component.html',
  styleUrls: ['./subnet.component.scss'],
})
export class SubnetComponent {
  @Input() subnetForm: FormGroup | undefined | any;
  @Input() vnetIndex = 0;
  @Input() subnetIndex = 0;
  @Output() remove = new EventEmitter<number>();

  get nics(): FormArray {
    return this.subnetForm?.get('nics') as FormArray;
  }

  addNIC(): void {
    const nicForm = new FormGroup({
      resourceName: new FormControl(''),
      resourceType: new FormControl(RESOURCE_TYPES.NIC),
    });
    this.nics.push(nicForm);
  }

  removeSubnet(): void {
    this.remove.emit(this.subnetIndex);
  }

  removeNic(subnetIndex: number): void {
    this.nics.removeAt(subnetIndex);
  }
}
