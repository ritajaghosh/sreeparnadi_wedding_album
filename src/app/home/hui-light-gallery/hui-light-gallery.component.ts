import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-hui-light-gallery',
  templateUrl: './hui-light-gallery.component.html',
  styleUrls: ['./hui-light-gallery.component.scss']
})
export class HuiLightGalleryComponent implements OnInit {
  private lightGallery!: LightGallery;
  settings = {
    counter: true,
    plugins: [lgZoom],
  };
  private needRefresh = false;
  items = [
    {
      id: '1',
      size: '1400-933',
      gdrive:"https://drive.google.com/uc?export=view&id=",
      src:
        '1X-9Mrb7xcytyDlPLE6fq8VwmYppLBjw7',
      thumb:
        '1oncl1HDhG05riV31couX_0ZdQ35v_l5S'
    },
    {
      id: '2',
      size: '1400-933',
      gdrive:"https://drive.google.com/uc?export=view&id=",
      src:
        '11LS6uO6eQvORIOu5YVBqjx-Rvuhk4yiq',
      thumb:
        '1MfgYmAmEgRxgke-oR-zGYY2b4xlFc_gj'
    },
    {
      id: '3',
      size: '1400-932',
      gdrive:"https://drive.google.com/uc?export=view&id=",
      src:
        '1qcIxB32-I06VMbRhCTQUlnkstgH9KXV5',
      thumb:
        '1ghSvXIJp3GAr6YHdQt2kp0Go7OFyyLiL'
    },
    {
      id: '4',
      size: '1400-932',
      gdrive:"https://drive.google.com/uc?export=view&id=",
      src: '1SZsBbcGUn8KoMRkE76LKNTwPQLb5MRK_',
      thumb: '1qMPVzPHdpJSkhtFU3xjesnMTZ5PJc3nr'
    }
  ];
  constructor() { }
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  ngOnInit(): void {
  }
  onInit = (detail: { instance: LightGallery; }): void => {
    this.lightGallery = detail.instance;
  };
  // addImage = () => {
  //   this.items = [
  //     ...this.items,
  //     {
  //       id: '4',
  //       size: '1400-933',
  //       src:
  //         'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
  //       thumb:
  //         'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
  //       subHtml: `<div class="lightGallery-captions">
  //           <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
  //           <p>Published on January 6, 2021</p>
  //       </div>`
  //     }
  //   ];
  //   this.needRefresh = true;
  // };

}
