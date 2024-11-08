import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CloudResourcesComponent } from './cloud-resources/cloud-resources.component';
import { VNetComponent } from './vnet/vnet.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SubnetComponent } from './vnet/subnet/subnet.component';
import { NICComponent } from './vnet/subnet/nic/nic.component';
import { ResourceTreeComponent } from './resource-tree/resource-tree.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'cloud-resources' },
      {
        path: 'cloud-resources',
        component: CloudResourcesComponent,
      },
      {
        path: 'resource-tree',
        component: ResourceTreeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    CloudResourcesComponent,
    VNetComponent,
    SubnetComponent,
    NICComponent,
    SubnetComponent,
    ResourceTreeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    SharedModule,
    MatIconModule,
    LayoutModule,
  ],
})
export class MainModule {}
