import { NgClass, NgStyle } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [NgClass, NgStyle],
	template: `
		<h4>Styles And Bootstrap</h4>
		<div>
			📖 More about NgClass and NgStyle:
			<a
				href="https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/"
				target="_blank"
				>ngstyle-and-ngclass</a
			>
		</div>
		<div class="mb-3">Click the buttons below to change the alert type</div>
		<button type="button" (click)="onChangeAlertType('primary')">
			Primary
		</button>
		<button type="button" (click)="onChangeAlertType('danger')">
			Danger
		</button>
		<button type="button" (click)="onChangeAlertType('success')">
			Success
		</button>

		<h4>Dynamic class names</h4>
		<div
			class="my-alert"
			[class.danger]="alert.type === 'danger'"
			[class.success]="alert.type === 'success'"
			[class.primary]="alert.type === 'primary'"
		>
			{{ alert.message }}
		</div>

		<h4>Dynamic attribute class</h4>
		<div class="mb-3">
			This case is not suggested, since every mouse/keyboard event
			triggers change detection and the evaluation of the getClass method
		</div>
		<div [class]="getClass()">
			{{ alert.message }}
		</div>

		<h4>NgClass</h4>
		<div class="mb-3">
			NgClass is a Directive that should be imported in the "imports"
			array in the metadata. If more conditions are satisfied, the
			relative classes will be applied together; in case of overlapping of
			styles, the one with more SPECIFICITY will be applied over the
			others. More about specificity concept:
			<li>
				📖
				<a
					href="https://www.w3schools.com/css/css_specificity.asp"
					target="_blank"
					>w3schools</a
				>
			</li>
			<li>
				📖
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"
					target="_blank"
					>developer.mozilla</a
				>
			</li>
			<li>
				📖
				<a
					href="https://css-tricks.com/specifics-on-css-specificity/"
					target="_blank"
					>css-tricks</a
				>
			</li>
		</div>
		<div
			class="my-alert"
			[ngClass]="{
				primary: alert.type === 'primary',
				danger: alert.type === 'danger',
				success: alert.type === 'success'
			}"
		>
			{{ alert.message }}
		</div>

		<h4>Inline styles</h4>
		<div class="mb-3">
			The directive style can be concatenate with css properties and
			bounded to a property through data binding. Sometimes, the single
			css property is not enough, as in the case of fontSize, width, etc,
			where a unit of measure should be specified: a suffix can be
			concatenated after the css property and in this case we talk about
			"suffix operator"
		</div>
		<div
			class="my-alert"
			[style.background-color]="alert.backgroundColor"
			[style.color]="alert.color"
			[style.width.px]="alert.width"
		>
			{{ alert.message }}
		</div>

		<h4>NgStyle</h4>

		<div class="my-alert" [ngStyle]="styles">
			{{ text }}
		</div>

		<h4>Use Bootstrap Classes</h4>

		<div
			class="alert"
			[ngClass]="{
				'alert-primary': alert.type === 'primary',
				'alert-danger': alert.type === 'danger',
				'alert-success': alert.type === 'success',
				}"
		>
			{{ alert.message }} - {{ alert.type }}
		</div>
	`,
	styles: [
		`
			:host {
				display: block;
				padding: 1rem;
			}
			.my-alert {
				padding: 20px;
				border: 1px solid black;
				border-radius: 20px;
				margin-top: 10px;
			}
			.primary {
				background-color: blue;
				color: white;
			}
			.danger {
				background-color: red;
				color: white;
			}
			.success {
				background-color: lightgreen;
				color: black;
			}
		`,
	],
})
export class AppComponent {
	/**	The alert to be shown */
	alert: {
		message: string;
		type: "primary" | "success" | "danger" | "unknown";
		width: number;
		backgroundColor: string;
		color: string;
	} = {
		message: "default message",
		type: "primary",
		width: 100,
		backgroundColor: "blue",
		color: "white",
	};
	/** Additional styles to be used with NgStyle directive */
	styles: {
		backgroundColor: string;
		color: string;
		fontSize: string;
	} = {
		backgroundColor: "red",
		color: "white",
		fontSize: "100px",
	};
	/** A default text to be used in an alert */
	text = "Hello Styles";
	/** Retrieve dynamically alert classes, based on the alert type */
	getClass(): "my-alert danger" | "my-alert success" | "my-alert primary" {
		switch (this.alert.type) {
			case "danger":
				return "my-alert danger";
			case "success":
				return "my-alert success";
			default:
			case "primary":
				return "my-alert primary";
		}
	}
	/**
	 * Change the alert style
	 * @param type the flavour of the alert, based on the priority/severity.
	 */
	onChangeAlertType(type: "danger" | "success" | "primary"): void {
		let alert = null;
		switch (type) {
			case "primary": {
				alert = {
					message: "Hello!",
					type,
					width: 100,
					backgroundColor: "blue",
					color: "white",
				};
				break;
			}
			case "success": {
				alert = {
					message: "Oh, yeah!",
					type,
					width: 200,
					backgroundColor: "lightgreen",
					color: "black",
				};

				break;
			}
			case "danger": {
				alert = {
					message: "Oh, no!",
					type,
					width: 150,
					backgroundColor: "red",
					color: "white",
				};
				break;
			}
			default: {
				alert = {
					message: "Unknown status",
					type,
					width: 200,
					backgroundColor: "violet",
					color: "white",
				};
				break;
			}
		}
		this.alert = alert;
	}

	onClickStylesButton(type: "danger" | "success" | "primary"): void {
		let styles = null;
		switch (type) {
			case "primary": {
				styles = {
					backgroundColor: "blue",
					color: "white",
					fontSize: "10px",
				};
				break;
			}
			case "success": {
				styles = {
					backgroundColor: "lightgreen",
					color: "black",
					fontSize: "10px",
				};

				break;
			}
			case "danger": {
				styles = {
					backgroundColor: "red",
					color: "black",
					fontSize: "10px",
				};

				break;
			}
			default: {
				styles = {
					backgroundColor: "violet",
					color: "white",
					fontSize: "100px",
				};
				break;
			}
		}
		this.styles = styles;
	}
}
