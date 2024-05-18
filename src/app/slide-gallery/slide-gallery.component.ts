import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { ISlideGalleryModel } from "./slide-gallery-types";

@Component({
	selector: "app-slide-gallery",
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: "./slide-gallery.component.html",
	styleUrl: "./slide-gallery.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideGalleryComponent {
	/** Current index for the gallery */
	currentIndex = 0;
	/** List of technologies to be shown inn the gallery */
	readonly technologies: ISlideGalleryModel[] = [
		{
			name: "Angular 17",
			altName: "Angular 17 logo",
			path: "assets/images/angular.webp",
			website: "https://angular.dev/",
		},
		{
			name: "Angular 16",
			altName: "Angular 16 logo",
			path: "assets/images/angular2.webp",
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
		this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.technologies.length - 1;
	}
	/** Move to the next image. If it is the last of the array, return to first */
	nextImage(): void {
		this.currentIndex = this.currentIndex < this.technologies.length - 1 ? this.currentIndex + 1 : 0;
	}
}
