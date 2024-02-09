import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  // 📖 More about NgClass and NgStyle: https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/
  imports: [NgClass, NgStyle],
  template: `
    <button type="button" (click)="onClickButton('primary')">Primary</button>
    <button type="button" (click)="onClickButton('danger')">Danger</button>
    <button type="button" (click)="onClickButton('success')">Success</button>

    <h4>Dynamic class names</h4>
    <div
      class="my-alert"
      [class.danger]="alert.type === 'danger'"
      [class.success]="alert.type === 'success'"
      [class.primary]="alert.type === 'primary'"
    >
      {{ alert.msg }}
    </div>

    <h4>Dynamic attribute class</h4>
    <!-- 📝 this is not suggested, since every mouse/keyboard event triggers change detection and the evaluation of the getClass method -->
    <div [class]="getClass()">
      {{ alert.msg }}
    </div>

    <h4>NgClass</h4>
    <!--  📝 NgClass is a Directive that should be imported in the "imports" array in the metadata.
          If more conditions are satisfied, the relative classes will be applied together; in case of overlapping of styles, the one with more SPECIFICITY will be applied over the others.
          More about specificity concept:
          📖 https://www.w3schools.com/css/css_specificity.asp
          📖 https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
          📖 https://css-tricks.com/specifics-on-css-specificity/
      -->
    <div
      class="my-alert"
      [ngClass]="{
        primary: alert.type === 'primary',
        danger: alert.type === 'danger',
        success: alert.type === 'success'
      }"
    >
      {{ alert.msg }}
    </div>

    <h4>Inline styles</h4>
    <!-- 📝 The directive style can be concatenate with css properties and bounded to a property through data binding.
         Sometimes, the single css property is not enough, as in the case of fontSize, width, etc, where a unit of measure should be specified:
         a suffix can be concatenated after the css property and in this case we talk about "suffix operator"
        -->
    <div
      class="my-alert"
      [style.background-color]="alert.bg"
      [style.color]="alert.color"
      [style.width.px]="alert.width"
    >
      {{ alert.msg }}
    </div>

    <h4>NgStyle</h4>
    <button type="button" (click)="onClickStylesButton('primary')">
      Primary
    </button>
    <button type="button" (click)="onClickStylesButton('danger')">
      Danger
    </button>
    <button type="button" (click)="onClickStylesButton('success')">
      Success
    </button>

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
      {{ alert.msg }} - {{ alert.type }}
    </div>

    <button type="button" (click)="onClickButton('primary')">Primary</button>
    <button type="button" (click)="onClickButton('danger')">Danger</button>
    <button type="button" (click)="onClickButton('success')">Success</button>
  `,
  styles: [
    `
      .my-alert {
        padding: 20px;
        border: 4px solid black;
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

  getClass(): 'my-alert danger' | 'my-alert success' | 'my-alert primary' {
    switch (this.alert.type) {
      case 'danger':
        return 'my-alert danger';
      case 'success':
        return 'my-alert success';
      default:
      case 'primary':
        return 'my-alert primary';
    }
  }

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

  onClickStylesButton(type: 'danger' | 'success' | 'primary'): void {
    let styles = null;
    switch (type) {
      case 'primary': {
        styles = { backgroundColor: 'blue', color: 'white', fontSize: '10px' };
        break;
      }
      case 'success': {
        styles = {
          backgroundColor: 'lightgreen',
          color: 'black',
          fontSize: '10px',
        };

        break;
      }
      case 'danger': {
        styles = { backgroundColor: 'red', color: 'black', fontSize: '10px' };

        break;
      }
      default: {
        styles = {
          backgroundColor: 'violet',
          color: 'white',
          fontSize: '100px',
        };
        break;
      }
    }
    this.styles = styles;
  }
}
