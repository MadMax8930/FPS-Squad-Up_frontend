import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselGamesComponent } from './carousel-games.component';

describe('CarouselGamesComponent', () => {
  let component: CarouselGamesComponent;
  let fixture: ComponentFixture<CarouselGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
