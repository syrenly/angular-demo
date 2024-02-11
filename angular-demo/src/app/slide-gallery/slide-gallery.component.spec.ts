import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SlideGalleryComponent } from "./slide-gallery.component";

describe("SlideGalleryComponent", () => {
	let component: SlideGalleryComponent;
	let fixture: ComponentFixture<SlideGalleryComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [SlideGalleryComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SlideGalleryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
});
