import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: {gallery: string[]}) { }
  gallery = this.data.gallery;
  activeIndex:number = 0;
  currentImage = this.gallery[this.activeIndex];
  previousImage() : void{
    if(this.activeIndex > 0){
      this.activeIndex--;

    }else{
      this.activeIndex = this.gallery.length - 1;
    }
  }
  nextImage() : void{
    if(this.activeIndex < this.gallery.length - 1){
      this.activeIndex++;

    }else{
      this.activeIndex = 0;
    }
  }

}
