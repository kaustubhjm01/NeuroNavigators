import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {

  @Input() photos = []

  // photos = [
  //   'assets/images/fri2.jpg',
  //   'assets/photo2.jpg',
  //   'assets/photo3.jpg',
  //   'assets/photo4.jpg',
  //   'assets/photo5.jpg',
  //   'assets/photo6.jpg',
  //   'assets/photo7.jpg',
  //   'assets/photo8.jpg',
  //   'assets/photo9.jpg',
  //   'assets/photo10.jpg'
  // ];
}
