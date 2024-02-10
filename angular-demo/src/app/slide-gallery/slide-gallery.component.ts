import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-gallery.component.html',
  styleUrl: './slide-gallery.component.scss',
})
export class SlideGalleryComponent {
  currentIndex = 0;
  product = {
    name: 'T-Shirt',
    images: [
      { path: 'assets/images/angular.png', label: 'Angular' },
      { path: 'assets/images/react.png', label: 'React' },
      { path: 'assets/images/js.png', label: 'JS' },
    ],
    website: 'https://www.fabiobiondi.dev',
  };

  previousImage(): void {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.product.images.length - 1;
  }

  nextImage(): void {
    this.currentIndex =
      this.currentIndex < this.product.images.length - 1
        ? this.currentIndex + 1
        : 0;
  }
}
