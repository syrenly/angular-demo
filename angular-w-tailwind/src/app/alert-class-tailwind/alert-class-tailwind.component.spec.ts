import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AlertClassTailwindComponent } from "./alert-class-tailwind.component";

describe("AlertClassTailwindComponent", () => {
	let component: AlertClassTailwindComponent;
	let fixture: ComponentFixture<AlertClassTailwindComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AlertClassTailwindComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AlertClassTailwindComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});