import { Location } from "@angular/common";
import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { AppComponent } from "./app.component";
import { IconComponent } from "./icon/icon.component";

@Component({
	selector: "dummy1",
	template: "",
	standalone: true,
})
class Dummy1Component {}
@Component({
	selector: "dummy2",
	template: "",
	standalone: true,
})
class Dummy2Component {}
@Component({
	selector: "dummy3",
	template: "",
	standalone: true,
})
class Dummy3Component {}

describe("AppComponent", (): void => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	let location: Location;
	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			declarations: [],
			imports: [
				AppComponent,
				IconComponent,
				Dummy1Component,
				Dummy2Component,
				Dummy3Component,
				RouterLink,
				RouterOutlet,
				RouterModule.forRoot([
					{ path: "", component: Dummy1Component },
					{ path: "todo-list", component: Dummy2Component },
					{ path: "slide-gallery", component: Dummy3Component },
				]),
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {},
				},
			],
		}).compileComponents();
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		location = TestBed.inject(Location);
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
	describe("should have 3 routes", (): void => {
		it("case home", (): void => {
			const links: DebugElement[] = fixture.debugElement.queryAll(By.css(`li`));
			const textContent = links[0].nativeElement.textContent.trim();
			expect(textContent).toBe("Home");
		});
		it("case slide gallery", (): void => {
			const links: DebugElement[] = fixture.debugElement.queryAll(By.css(`li`));
			const textContent = links[1].nativeElement.textContent.trim();
			expect(textContent).toBe("Slide Gallery");
		});
		it("case Todo List", (): void => {
			const links: DebugElement[] = fixture.debugElement.queryAll(By.css(`li`));
			const textContent = links[2].nativeElement.textContent.trim();
			expect(textContent).toBe("Todo List");
		});
	});
	// describe("should navigate on each route", (): void => {
	// 	it("case home", fakeAsync((): void => {
	// 		const links: DebugElement[] = fixture.debugElement.queryAll(By.css(`li a`));
	// 		links[0].triggerEventHandler("click", { button: 0 });
	// 		tick(10);
	// 		expect(location.path()).toBe("");
	// 	}));
	// 	it("case slide gallery", fakeAsync((): void => {
	// 		const links: DebugElement[] = fixture.debugElement.queryAll(By.css(`li a`));
	// 		links[1].triggerEventHandler("click", { button: 0 });
	// 		tick(10);
	// 		expect(location.path()).toBe("slide-gallery");
	// 	}));
	// });
});
