import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../../services/photo.service";
import {Picture} from "../../models/picture.model";

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  images: Picture[]=[];
  displayBasic: boolean = true;
  displayCustom: boolean = false;

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= (this.images.length - 1)) {
      this._activeIndex = newValue;
    }
  }

  _activeIndex: number = 2;

  responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  displayBasic2: boolean = false;





  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getImages().then(images => this.images = images)
  }
  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }


}
