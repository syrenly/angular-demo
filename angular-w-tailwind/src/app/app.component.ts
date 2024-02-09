import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="m-2">
      <!-- 📖 More about Tailwind for Angular: https://tailwindcss.com/docs/guides/angular) -->
      <h4>Use Tailwind Classes - inline styles</h4>

      <div
        class="border-4 border-black rounded-3xl p-5 m-4"
        [ngClass]="{
        'bg-sky-600 text-white': alert.type === 'primary',
        'bg-red-600 text-white': alert.type === 'danger',
        'bg-green-200 text-black': alert.type === 'success',
       }"
      >
        {{ alert.msg }}
      </div>

      <div class="flex gap-3">
        <button
          type="button"
          class="bg-sky-400 px-2 py-1 rounded-xl"
          (click)="onClickButton('primary')"
        >
          Primary
        </button>
        <button
          type="button"
          class="bg-sky-400 px-2 py-1 rounded-xl"
          (click)="onClickButton('danger')"
        >
          Danger
        </button>
        <button
          type="button"
          class="bg-sky-400 px-2 py-1 rounded-xl"
          (click)="onClickButton('success')"
        >
          Success
        </button>
      </div>

      <h4>Use Tailwind Classes - 2 - use classes (apply)</h4>

      <div
        class="alert-tailwind m-4"
        [ngClass]="{
        'alert-primary-tailwind': alert.type === 'primary',
        'alert-danger-tailwind': alert.type === 'danger',
        'alert-success-tailwind': alert.type === 'success',
    }"
      >
        {{ alert.msg }}
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
        Centered alert for lg screen, corresponding to max-width: 1024px; with
        margin auto
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
    msg: string;
    type: 'primary' | 'success' | 'danger' | 'unknown';
    width: number;
    bg: string;
    color: string;
  } = {
    msg: 'default message',
    type: 'primary',
    width: 100,
    bg: 'blue',
    color: 'white',
  };

  styles: {
    backgroundColor: string;
    color: string;
    fontSize: string;
  } = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '100px',
  };

  text = 'Hello Styles';

  onClickButton(type: 'danger' | 'success' | 'primary'): void {
    let alert = null;
    switch (type) {
      case 'primary': {
        alert = {
          msg: 'Hello!',
          type,
          width: 100,
          bg: 'blue',
          color: 'white',
        };
        break;
      }
      case 'success': {
        alert = {
          msg: 'Oh, yeah!',
          type,
          width: 200,
          bg: 'lightgreen',
          color: 'black',
        };

        break;
      }
      case 'danger': {
        alert = {
          msg: 'Oh, no!',
          type,
          width: 150,
          bg: 'red',
          color: 'white',
        };
        break;
      }
      default: {
        alert = {
          msg: 'Unknown status',
          type,
          width: 200,
          bg: 'violet',
          color: 'white',
        };
        break;
      }
    }
    this.alert = alert;
  }
}
