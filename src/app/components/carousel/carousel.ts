import {Component, OnInit} from '@angular/core';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular';

@Component({
  selector: 'app-carousel',
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './media/AI.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './media/fisi.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    this.slides[2] = {
      id: 2,
      src: './media/unmsm.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    };
  }
}
