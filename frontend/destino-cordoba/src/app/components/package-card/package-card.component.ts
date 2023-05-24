import { Component, Input, OnInit } from '@angular/core';
import { PackageCard } from 'src/app/models/package-card';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent implements OnInit{
  
  @Input() path: string = '#';
  @Input() package!: PackageCard;
  stars!: number[];
  
  ngOnInit(): void {
    this.stars = Array(Math.ceil(this.package.rate)).fill(0);
  }
}
