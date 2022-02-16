import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { HierarchyComponent } from './hierarchy.component';
import {OrganizationChartModule} from "primeng/organizationchart";


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
    OrganizationChartModule
  ]
})
export class HierarchyModule { }
