import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuiLightGalleryRoutingModule } from './hui-light-gallery-routing.module';
import { HuiLightGalleryComponent } from './hui-light-gallery.component';
import { LightgalleryModule } from 'lightgallery/angular';



@NgModule({
  declarations: [
    HuiLightGalleryComponent
  ],
  exports: [
    HuiLightGalleryComponent
  ],
  imports: [
    CommonModule,
    HuiLightGalleryRoutingModule,
    LightgalleryModule
  ]
})
export class HuiLightGalleryModule { }
