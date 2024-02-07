# npm vs npx

## npm

Npm, or **Node Package Manager**, is an external registry that hosts open-source packages and allow to manage the local/global installation of libraries with its own CLI (**npm**). A package, to be used and installed, should be references in a file called package.json. There are two type of installation:

- global: the packages are installed in a global folder of the system (if Linux, `/usr/local/bin`, if Windows `%AppData%/npm`);
- local: the package are installed in the same folder where the installation command is executed, under a subfolder called `./node_modules/.bin/`

## npx

Npx is similar to **npm**, but allows to run an arbitrary command from a package without installing that package. It is useful in Angular because a project to be created needs access to the Angular CLI commands, so usually the developer installs it globally and then generates the application that will install it locally too:

```
    npm i @angular/cli@latest -g
    ng new angular-demo
```

Using npx, only the local version will be installed.

# Create Standalone Applications

Execute the following line in terminal:

```
    npx -p @angular/cli@latest ng new angular-demo -s -S -t
```

From the previous paragraph, we know that npx will not install the latest version of Angular, but it will fetch the package @angular/CLI to use without installation the command `ng new`.
The params explained:

- -s: inline styles;
- -t: inline templates;
- -S: let configure unit tests, but do not generate test (_.spec_) files;

By default, the project is module-less and implements special components called **standalone**

## init

Another way to create an Angular project, without installing globally the CLI, is to use the new `init` command:

```
    npm init @angular@latest [project-name] --param1 --param2 --param3
```

## Run the application

To run the application, execute the following command: `ng serve`. This command **builds** and **serve** the application on the local port 4200. It provides also a **live reloading**, meaning that the application will be rebuilt automatically when a change is detected in the source code.

> What does it mean "serve"?
> The Angular CLI starts a local server that hosts the application and exposes it in a local port. "Serve" means make the application available to be accessed and used.
