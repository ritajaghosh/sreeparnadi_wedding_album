import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuiLightGalleryComponent } from './hui-light-gallery.component';

const routes: Routes = [{ path: '', component: HuiLightGalleryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuiLightGalleryRoutingModule { }
