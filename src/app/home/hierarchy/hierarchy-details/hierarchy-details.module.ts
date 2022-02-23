import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HierarchyDetailsRoutingModule } from './hierarchy-details-routing.module';
import { HierarchyDetailsComponent } from './hierarchy-details.component';


@NgModule({
  declarations: [
    HierarchyDetailsComponent
  ],
  imports: [
    CommonModule,
    HierarchyDetailsRoutingModule
  ]
})
export class HierarchyDetailsModule { }
