import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {


  @Input() gallery: string[] = [];
  @Input() totalDuration: string = '';
}
