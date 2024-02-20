import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ISlideGalleryModel } from "./slide-gallery-types";

@Component({
	selector: "app-slide-gallery",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./slide-gallery.component.html",
	styleUrl: "./slide-gallery.component.scss",
})
export class SlideGalleryComponent {
	currentIndex = 0;
	technologies: ISlideGalleryModel[] = [
		{
			name: "Angular",
			altName: "Angular logo",
			path: "assets/images/angular.webp",
			website: "https://angular.io/",
		},
		{
			name: "React",
			altName: "React logo",
			path: "assets/images/react.webp",
			website: "https://react.dev/",
		},
		{
			name: "Vue",
			altName: "Vue logo",
			path: "assets/images/vue.webp",
			website: "https://vuejs.org/",
		},
	];
	/** Move to the previous image. If it is the first of the array, go to last */
	previousImage(): void {
		this.currentIndex =
			this.currentIndex > 0
				? this.currentIndex - 1
				: this.technologies.length - 1;
	}
	/** Move to the next image. If it is the last of the array, return to first */
	nextImage(): void {
		this.currentIndex =
			this.currentIndex < this.technologies.length - 1
				? this.currentIndex + 1
				: 0;
	}
}
