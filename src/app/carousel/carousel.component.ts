import { Component, OnInit } from '@angular/core';
import { CarouselServiceService } from 'src/app/services/carousel-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  slides: any[] = [];

constructor (
  private carouselService: CarouselServiceService) {
    
    this.slides = this.carouselService.getImages();
    
}

ngOnInit(): void {
}

}
