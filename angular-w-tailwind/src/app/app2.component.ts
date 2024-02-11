import { NgClass, NgTemplateOutlet, UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { AlertClassTailwindComponent } from "./alert-class-tailwind/alert-class-tailwind.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		NgClass,
		AlertClassTailwindComponent,
		UpperCasePipe,
		NgTemplateOutlet,
	],
	template: `
		<app-alert-class-tailwind [alert]="alert"></app-alert-class-tailwind>

		<div class="m-2">
			<h4>Use Tailwind Classes - 2 - use classes (apply)</h4>

			<div
				class="alert-tailwind m-4"
				[ngClass]="{
					'alert-primary-tailwind': alert.type === 'primary',
					'alert-danger-tailwind': alert.type === 'danger',
					'alert-success-tailwind': alert.type === 'success',
				}"
			>
				{{ alert.message }}
			</div>

			<div class="flex gap-3">
				<button class="btn-tailwind" (click)="onClickButton('primary')">
					primary
				</button>
				<button class="btn-tailwind" (click)="onClickButton('danger')">
					danger
				</button>
				<button class="btn-tailwind" (click)="onClickButton('success')">
					success
				</button>
			</div>

			<h4>Use Tailwind Media Queries</h4>
			<!-- Centered alert for lg screen, corresponding to max-width: 1024px; with margin auto
				📖 More about media queries and breakpoints: https://tailwindcss.com/docs/max-width -->
			<div
				class="alert-tailwind max-w-screen-lg mx-auto"
				[ngClass]="{
					'alert-primary-tailwind': alert.type === 'primary',
					'alert-danger-tailwind': alert.type === 'danger',
					'alert-success-tailwind': alert.type === 'success',
				}"
			>
				Centered alert for lg screen, corresponding to max-width:
				1024px; with margin auto
			</div>

			<h4 class="mt-4">Input with Daisy UI class</h4>

			<!-- 📝 Search through the documentation to retrieve the classes that you need,
				for example for the input (📖 https://daisyui.com/components/input/) -->
			<input type="text" class="input input-bordered" />

			<h4 class="mt-4">Input with Daisy UI class apply</h4>

			<!-- 📝 As for Tailwind, also Daisy UI can use @apply to group classes under a more specific class -->
			<input type="text" class="daisy-input" />
		</div>
	`,
	styles: `
	// tailwind @apply
	.btn-tailwind {
		@apply bg-sky-600 px-3 py-1 rounded-xl text-white;
	}
	.alert-tailwind {
		@apply border-4 border-black rounded-xl p-5 my-3;
	}
	.alert-primary-tailwind  {
		@apply bg-sky-600 text-white;
	}
	.alert-danger-tailwind  {
		@apply bg-red-600 text-white;
	}
	.alert-success-tailwind  {
		@apply bg-green-200 text-black;
	}
	.daisy-input {
		@apply input input-bordered;
	}
`,
})
export class AppComponent {
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

	styles: {
		backgroundColor: string;
		color: string;
		fontSize: string;
	} = {
		backgroundColor: "red",
		color: "white",
		fontSize: "100px",
	};

	text = "Hello Styles";
}
