import { Component, Provider } from "@angular/core";
import {
	ActivationEnd,
	ActivationStart,
	ChildActivationEnd,
	ChildActivationStart,
	GuardsCheckEnd,
	GuardsCheckStart,
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationExtras,
	NavigationSkipped,
	NavigationStart,
	ResolveEnd,
	ResolveStart,
	RouteConfigLoadEnd,
	RouteConfigLoadStart,
	Router,
	Routes,
	RoutesRecognized,
	Scroll,
} from "@angular/router";
import { from } from "rxjs";
type Event_2 =
	| NavigationStart
	| NavigationEnd
	| NavigationCancel
	| NavigationError
	| RoutesRecognized
	| GuardsCheckStart
	| GuardsCheckEnd
	| RouteConfigLoadStart
	| RouteConfigLoadEnd
	| ChildActivationStart
	| ChildActivationEnd
	| ActivationStart
	| ActivationEnd
	| Scroll
	| ResolveStart
	| ResolveEnd
	| NavigationSkipped;

@Component({
	selector: "dummy1",
	template: "",
	standalone: true,
})
export class Dummy1Component {}
@Component({
	selector: "dummy2",
	template: "",
	standalone: true,
})
export class Dummy2Component {}
@Component({
	selector: "dummy3",
	template: "",
	standalone: true,
})
export class Dummy3Component {}

export const routes: Routes = [
	{ path: "", component: Dummy1Component },
	{ path: "todo-list", component: Dummy2Component },
	{ path: "slide-gallery", component: Dummy3Component },
];

const navigation = new NavigationEnd(0, "/", "/");

export function getRouterSpy(): Provider {
	return {
		provide: Router,
		useValue: {
			...jasmine.createSpyObj("Router", {
				navigate(commands: unknown[], extras?: NavigationExtras): Promise<boolean> {
					return new Promise<false>((): void => {});
				},
				navigateByUrl(commands: unknown[], extras?: NavigationExtras): Promise<boolean> {
					return new Promise<false>((): void => {});
				},
			}),
			url: "/",
			events: from([navigation]),
		},
	};
}
