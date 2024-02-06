# Data Binding

In Angular you can bind properties of the Component to attributes of the html template.

## Data Binding with []

Wrap the attribute of the html with squared brackets and assign it to a public property of the component:

```
// component.ts

image = 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-628.png?sfvrsn=bf64b1ee_3'
width = 100;
description = 'Angular Logo';
```

```
// component.html

<img [src]="image" [alt]="description" [width]="width">
```

This type of binding works with any property, even the methods:

```
// component.ts

image = 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-628.png?sfvrsn=bf64b1ee_3'
width = 100;
description = 'Angular Logo';

getDescription(): string {
    return this.description;
}
```

```
// component.html

<img [src]="image" [alt]="getDescription()" [width]="width">
```

It is not suggested to use methods in this way, because any event in the DOM can trigger the change detection and force the continuous invocation of the method. This can slow the performance of the application.

## Interpolation {{}}

Another way of data binding is the **interpolation**, also known as **template tags**, that allow the evaluation of a javascript expression inside the html. The result of the expression will update if it changes:

```
// component.ts
    currentIndex = 0;

    constructor() {
        setInterval(() => {
            this.currentIndex++;
        }, 1000)
    }
```

```
// component.html

 <span>{{currentIndex}}</span>
 <!-- the value changes every 1 second -->
```

The expression inside the interpolation can be a simple number or string, but it can be - for example - a method or a coalescing operator:

```
// component.html

 <span>{{currentIndex < 10 ? currentIndex : currentIndex - 5}}</span>
 <!-- the value changes every 1 second -->
```
