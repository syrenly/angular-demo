import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { IconComponent } from "../icon/icon.component";
import { SlideGalleryComponent } from "./slide-gallery.component";

describe("SlideGalleryComponent", (): void => {
	let component: SlideGalleryComponent;
	let fixture: ComponentFixture<SlideGalleryComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [SlideGalleryComponent, IconComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SlideGalleryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
	describe("should click arrow buttons", (): void => {
		it("should call #previousImage", (): void => {
			const buttonSpy = spyOn(component, "previousImage");
			const button: DebugElement = fixture.debugElement.query(By.css(".previous-image"));
			button.nativeElement.click();
			expect(buttonSpy).toHaveBeenCalled();
		});
		it("should call #nextImage", (): void => {
			const buttonSpy = spyOn(component, "nextImage");
			const button: DebugElement = fixture.debugElement.query(By.css(".next-image"));
			button.nativeElement.click();
			expect(buttonSpy).toHaveBeenCalled();
		});
	});
	describe("should test #previousImage", (): void => {
		it("should go from index 2  to index 1", (): void => {
			component.currentIndex = 2;
			component.previousImage();
			expect(component.currentIndex).toEqual(1);
		});
		it("should go from first index 0 to last index 2", (): void => {
			component.currentIndex = 0;
			component.previousImage();
			expect(component.currentIndex).toEqual(2);
		});
	});
	describe("should test #nextImage", (): void => {
		it("should go from index 1 to index 2", (): void => {
			component.currentIndex = 1;
			component.nextImage();
			expect(component.currentIndex).toEqual(2);
		});
		it("should go from last index 2 to first index 0", (): void => {
			component.currentIndex = 2;
			component.nextImage();
			expect(component.currentIndex).toEqual(0);
		});
	});
	it("should have title of the first item by default", (): void => {
		const compiled = fixture.nativeElement as HTMLElement;
		const nameTag = compiled.querySelector<HTMLElement>(".name");
		expect(nameTag?.textContent?.trim()).toBe(`${component.technologies[0].name}`);
	});
	it("should show the web site name", (): void => {
		const compiled = fixture.nativeElement as HTMLElement;
		const websiteTag = compiled.querySelector<HTMLElement>(".link");
		expect(websiteTag?.textContent?.trim()).toBe(component.technologies[0].website);
	});
});
