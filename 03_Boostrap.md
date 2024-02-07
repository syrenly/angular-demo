# Bootstrap

Bootstrap is a famous CSS framework, that makes available not only css classes, but also javascript components.

## Import through CDN

In this case, we are importing only the css classes, through a css file hosted in a CDN, an external server. This is the fastest way to make the classes available through the application with minimal effort. The import of content frm external url exposes the application to security issues, since the url points to a file that can be corrupted or replaced with malicious content: the attribute "integrity" is made to help the browser to check if the content coming from the url is the same it attends. The security feature that allows the check is called [**Subresource Integrity (SRI)**](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity): it enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match.
To verify the integrity of the file, use an [**SRI hash generator**](https://www.srihash.org/): paste the url inside the input and choose the cryptographic hash you want. It will generate a link tag with all the needed attribute:

```
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
```

If server of Bootstrap is down or the file changes for any reason, the styles will not be available on the application. Although using a cache can be a possible option, the better way to get the framework is to install it through npm.

## Install with NPM

Install Bootstrap through npm:

```
    npm i bootstrap@latest
```

Then in the `angular.json` add the path to the css file from the `node_modules` folder inside the `styles` array of the application:

```
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.scss"
]
```
