# Tailwind

Tailwind is another CSS framework. It does not expose full components like Bootstrap, but provides atomic classes to let developers build their own components. Tailwind checks which classes are actually used and, with a post css process, removes the unused ones from the builded bundle. The final build will includes utility classes that Tailwind needs to work and the classes used actually in the application.

## Install and init

To install Tailwind, follow this [guide](https://tailwindcss.com/docs/guides/angular). To install the last release, execute the command:

```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
```

or, for a specific version:

```
    npm install -D tailwindcss@3.3.6 postcss@8.4.32 autoprefixer@10.4.16
    npx tailwindcss init
```

where `autoprefixer` is an option that adds prefixes to classes to be compatible with the majority of browser, and `postcss` is the process that removes unused classes from the final build. The command `init` generates a file `tailwind.config.js`, that contains configuration data, including the paths that you need to analyze with the post css process (regex are allowed)

```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{html,ts}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
```

Then, add to the global styles file the following imports, that are the utility classes need by Tailwind in order to work:

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

After running the application, you will notice that Tailwind removes all default styles from the base tags of the html: buttons that are displayed as a simple label, header lines with the style of the normal text. This is wanted, so you can customize them more easily.

## How to use Tailwind classes

You can apply classes directly in the attribute class:

```
    <div class="border-4 border-black rounded-3xl p-5 m-4"></div>
```

Or create your own classes and use the instruction @apply to add to them Tailwind classes:

```
    .btn {
        @apply bg-sky-600 px-3 py-1 rounded-xl text-white;
    }
```

# Daisy UI

If you don't want to create your own components, but still you want to use Tailwind, then you can install a framework based on Tailwind, like [Daisy UI](https://daisyui.com/).

## Install

To install Daisy UI, you need to have already installed Node.js and Tailwind. Then, execute the following command to install the last release

```
    npm i -D daisyui@latest
```

or execute the following command to install a specific version:

```
    npm i -D daisyui@4.4.19
```

Inside the file `tailwind.config.js`, add the following instructions to configure Daisy UI:

```
    module.exports = {
        //...
        plugins: [require("daisyui")],
    }
```

Remember that Daisy UI detects if the browser is using a dark theme: if so, it will apply its dark theme and the default background will turn from white to black. If you want to disable the dark theme (or any theme), list your preferences in the configuration files:

```
    module.exports = {
        //...
        daisyui: {
            themes: ["light"],
        },
    }
```
