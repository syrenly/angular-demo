import { SimpleChanges } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IconComponent } from "./icon.component";

describe("IconComponent", (): void => {
	let component: IconComponent;
	let fixture: ComponentFixture<IconComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [IconComponent, FontAwesomeModule],
		}).compileComponents();

		fixture = TestBed.createComponent(IconComponent);
		component = fixture.componentInstance;
		component.selectedIcon = faArrowLeft;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
	it("should test #ngOnChanges", (): void => {
		const changes: SimpleChanges = {};
		changes["icon"] = {
			previousValue: undefined,
			currentValue: "map",
			firstChange: true,
			isFirstChange: (): boolean => false,
		};

		component.ngOnChanges(changes);
		expect(component.selectedIcon?.iconName).toEqual("map");
	});
});
