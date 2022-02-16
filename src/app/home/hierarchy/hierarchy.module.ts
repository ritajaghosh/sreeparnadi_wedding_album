import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { HierarchyComponent } from './hierarchy.component';
import {OrganizationChartModule} from "primeng/organizationchart";
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [
    HierarchyComponent
  ],
  exports: [
    HierarchyComponent
  ],
  imports: [
    CommonModule,
    HierarchyRoutingModule,
    OrganizationChartModule,
    ToastModule
  ]
})
export class HierarchyModule { }
