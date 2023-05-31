import { Component,Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/pages/travel-package';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    console.log(this.gallery)
  }

  @Input() gallery: any[] = [];
  @Input() totalDuration: string = '';
  @Input() isLoading: boolean = true;

  openDialog() : void{
    this.dialog.open(ModalComponent,{
      width: '100%',
      data: {gallery: this.gallery}
    });

  }
}
