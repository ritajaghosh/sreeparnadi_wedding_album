import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HierarchyDetailsComponent } from './hierarchy-details.component';

const routes: Routes = [{ path: '', component: HierarchyDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HierarchyDetailsRoutingModule { }
