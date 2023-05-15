import { Component,Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/pages/travel-package';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor(public dialog: MatDialog) {}

  @Input() gallery: string[] = [];
  @Input() totalDuration: string = '';

  openDialog() : void{
    this.dialog.open(ModalComponent,{
      width: '100%',
      data: {gallery: this.gallery}
    });

  }
}
