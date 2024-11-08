import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nic',
  templateUrl: './nic.component.html',
  styleUrls: ['./nic.component.scss'],
})
export class NICComponent {
  @Input() nicForm: FormGroup | any;
  @Input() nicIndex = 0;
  @Input() subnetIndex: number | undefined;

  @Output() removeNIC = new EventEmitter<number>();

  removeNic(): void {
    this.removeNIC.emit(this.nicIndex);
  }
}
