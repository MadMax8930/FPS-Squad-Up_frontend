import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselServiceService {

  constructor() { }

  slides = [];
  gameSlides = new Object; 

    getImages(){
        return this.slides = gameSlides.slice(0);
    }

    getImage(id: number){
            return gameSlides.slice(id).find(slides => slides.id === id);
    }
}

const gameSlides = [
  {id: 1, path: 'src/app/assets/qw1.jpg' },
  {id: 2, path: 'src/app/assets/qw2.jpg' },
  {id: 3, path: 'src/app/assets/qw3.jpg' },
  {id: 4, path: 'src/app/assets/qw4.jpg' },
  {id: 5, path: 'src/app/assets/qw5.jpg' },
  {id: 6, path: 'src/app/assets/qw6.jpg' }
];