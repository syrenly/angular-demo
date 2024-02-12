import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AlertApplyTailwindComponent } from "./alert-apply-tailwind.component";

describe("AlertApplyTailwindComponent", () => {
	let component: AlertApplyTailwindComponent;
	let fixture: ComponentFixture<AlertApplyTailwindComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [AlertApplyTailwindComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AlertApplyTailwindComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
});
