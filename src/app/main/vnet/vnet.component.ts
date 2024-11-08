import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { RESOURCE_TYPES } from '../../../libs';

@Component({
  selector: 'app-vnet',

  templateUrl: './vnet.component.html',
  styleUrls: ['./vnet.component.scss'],
})
export class VNetComponent {
  @Input() vnetForm: FormArray | FormGroup | any;
  @Input() index = 0;
  @Output() remove = new EventEmitter<number>();
  @Output() change = new EventEmitter<void>();

  constructor(private readonly cdr: ChangeDetectorRef) {}

  get subnets(): FormArray {
    return this.vnetForm?.get('subnets') as FormArray;
  }

  addSubnet(): void {
    const subnetForm = new FormGroup({
      resourceName: new FormControl(''),
      resourceType: new FormControl(RESOURCE_TYPES.SUBNET),
      nics: new FormArray([]),
    });
    this.subnets.push(subnetForm);

    this.change.emit();
    this.cdr.detectChanges();
  }

  removeVNet(): void {
    this.remove.emit(this.index);
  }

  removeSubnet(subnetIndex: number): void {
    console.log(subnetIndex);
    this.subnets.removeAt(subnetIndex);
  }
}
