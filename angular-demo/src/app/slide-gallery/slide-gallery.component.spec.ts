import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SlideGalleryComponent } from "./slide-gallery.component";

describe("SlideGalleryComponent", (): void => {
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
	describe("should test #previousImage", (): void => {
		it("should go from index 2  to index 1", (): void => {
			component.currentIndex = 2;
			const buttonSpy = spyOn(component, "previousImage");
			const compiled = fixture.nativeElement as HTMLElement;
			const buttons =
				compiled.querySelectorAll<HTMLElement>(".previous-image");
			buttons[0].click();
			expect(buttonSpy).toHaveBeenCalled();
			expect(component.currentIndex).toEqual(1);
		});
		it("should go from first index 0  to first index 2", (): void => {
			component.currentIndex = 0;
			const buttonSpy = spyOn(component, "previousImage");
			const compiled = fixture.nativeElement as HTMLElement;
			const buttons =
				compiled.querySelectorAll<HTMLElement>(".previous-image");
			buttons[0].click();
			expect(buttonSpy).toHaveBeenCalled();
			expect(component.currentIndex).toEqual(2);
		});
	});
	describe("should test #nextImage", (): void => {
		it("should go from index 1  to index 2", (): void => {
			component.currentIndex = 1;
			const buttonSpy = spyOn(component, "nextImage");
			const compiled = fixture.nativeElement as HTMLElement;
			const buttons =
				compiled.querySelectorAll<HTMLElement>(".next-image");
			buttons[0].click();
			expect(buttonSpy).toHaveBeenCalled();
			expect(component.currentIndex).toEqual(2);
		});
		it("should go from last index 2  to first index 0", (): void => {
			component.currentIndex = 2;
			const buttonSpy = spyOn(component, "nextImage");
			const compiled = fixture.nativeElement as HTMLElement;
			const buttons =
				compiled.querySelectorAll<HTMLElement>(".next-image");
			buttons[0].click();
			expect(buttonSpy).toHaveBeenCalled();
			expect(component.currentIndex).toEqual(0);
		});
	});
	it("should have title of the first item by default", (): void => {
		const compiled = fixture.nativeElement as HTMLElement;
		const nameTag = compiled.querySelector<HTMLElement>(".name");
		expect(nameTag?.textContent).toBe(`${component.technologies[0].name}`);
	});
	it("should show the web site name", (): void => {
		const compiled = fixture.nativeElement as HTMLElement;
		const websiteTag = compiled.querySelector<HTMLElement>(".website");
		expect(websiteTag?.textContent).toBe(component.technologies[0].website);
	});
});
