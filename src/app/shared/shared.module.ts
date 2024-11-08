import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceDialogComponent } from './resource-dialog/resource-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ObservableDestroyerDirective } from './directives/observable-destroyer.directive';

@NgModule({
  declarations: [ResourceDialogComponent, ObservableDestroyerDirective],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ResourceDialogComponent],
})
export class SharedModule {}
