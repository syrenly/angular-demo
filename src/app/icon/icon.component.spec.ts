import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IconComponent } from "./icon.component";

describe("IconComponent", () => {
	let component: IconComponent;
	let fixture: ComponentFixture<IconComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [IconComponent, FontAwesomeModule],
		}).compileComponents();

		fixture = TestBed.createComponent(IconComponent);
		component = fixture.componentInstance;
		component.selectedIcon = faArrowLeft;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
