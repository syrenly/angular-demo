import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Router, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { IconComponent } from "./icon/icon.component";
import { Dummy1Component, Dummy2Component, Dummy3Component, routes } from "./router.mock";

describe("AppComponent", (): void => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	let router: Router;
	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			declarations: [],
			imports: [
				AppComponent,
				IconComponent,
				Dummy1Component,
				Dummy2Component,
				Dummy3Component,
				RouterModule.forRoot(routes),
			],
		}).compileComponents();
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		router = TestBed.inject(Router);
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
	describe("should have 3 routes and navigate on each route", (): void => {
		it("case home", (): void => {
			spyOn(router, "navigateByUrl");
			const links: DebugElement[] = fixture.debugElement.queryAll(By.css(`li a`));
			const link = links[0].nativeElement;
			const textContent = link.textContent.trim();
			expect(textContent).toBe("Home");

			link.click();
			expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
			(router.navigateByUrl as jasmine.Spy).calls.reset();
		});
		it("case slide gallery", (): void => {
			spyOn(router, "navigateByUrl");
			const links: DebugElement[] = fixture.debugElement.queryAll(By.css(`li a`));
			const link = links[1].nativeElement;
			const textContent = link.textContent.trim();
			expect(textContent).toBe("Slide Gallery");

			link.click();
			expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
			(router.navigateByUrl as jasmine.Spy).calls.reset();
		});
		it("case todo list", (): void => {
			spyOn(router, "navigateByUrl");
			const links: DebugElement[] = fixture.debugElement.queryAll(By.css(`li a`));
			const link = links[2].nativeElement;
			const textContent = link.textContent.trim();
			expect(textContent).toBe("Todo List");

			link.click();
			expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
			(router.navigateByUrl as jasmine.Spy).calls.reset();
		});
	});
});
