import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-slide-gallery",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./slide-gallery.component.html",
	styleUrl: "./slide-gallery.component.scss",
})
export class SlideGalleryComponent {
	currentIndex = 0;
	product = {
		name: "T-Shirt",
		images: [
			{ path: "assets/images/angular.webp", label: "Angular" },
			{ path: "assets/images/react.webp", label: "React" },
			{ path: "assets/images/js.webp", label: "JS" },
		],
		website: "https://www.fabiobiondi.dev",
	};
	/** Move to the previous image. If it is the first of the array, go to last */
	previousImage(): void {
		this.currentIndex =
			this.currentIndex > 0
				? this.currentIndex - 1
				: this.product.images.length - 1;
	}
	/** Move to the next image. If it is the last of the array, return to first */
	nextImage(): void {
		this.currentIndex =
			this.currentIndex < this.product.images.length - 1
				? this.currentIndex + 1
				: 0;
	}
}
