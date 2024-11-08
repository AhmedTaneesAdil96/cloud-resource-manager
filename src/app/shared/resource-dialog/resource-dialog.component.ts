import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resource-dialog',
  templateUrl: './resource-dialog.component.html',
  styleUrls: ['./resource-dialog.component.css'],
})
export class ResourceDialogComponent implements OnInit {
  resourceForm: FormGroup;
  resourceType: 'VNet' | 'Subnet' | 'NIC';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ResourceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: 'VNet' | 'Subnet' | 'NIC' },
  ) {
    this.resourceType = data.type;
    console.log(this.resourceType);


    this.resourceForm = this.fb.group({
      resourceName: ['', Validators.required],
      resourceType: [data.type],
      tags: this.fb.array([]),
    });
  }

  get tags(): FormArray {
    return this.resourceForm.get('tags') as FormArray;
  }

  ngOnInit(): void {

    if (this.resourceType === 'Subnet') {
  
    } else if (this.resourceType === 'NIC') {

    }
  }

  addTag(): void {
    this.tags.push(
      this.fb.group({
        key: ['', Validators.required],
        value: ['', Validators.required],
      }),
    );
  }

  removeTag(index: number): void {
    this.tags.removeAt(index);
  }

  onSubmit(): void {
    if (this.resourceForm.valid) {
      this.dialogRef.close(this.resourceForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
