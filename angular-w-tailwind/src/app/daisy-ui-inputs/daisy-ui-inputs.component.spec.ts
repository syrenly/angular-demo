import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DaisyUIInputsComponent } from "./daisy-ui-inputs.component";

describe("DaisyUIInputsComponent", () => {
	let component: DaisyUIInputsComponent;
	let fixture: ComponentFixture<DaisyUIInputsComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [DaisyUIInputsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DaisyUIInputsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
});
