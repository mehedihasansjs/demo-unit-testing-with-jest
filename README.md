# Initial Angular Project

Install `jest` and `jest-environment-jsdom` as dev dependencies:

  ```bash
  npm install --save-dev \
  jest \
  jest-environment-jsdom \
  @types/jest
  ```

Check the `package.json` file to see the new dependencies. We can remove the dependencies from Karma and Jasmine:

  ```bash
  npm uninstall --save-dev \
  karma \
  karma-chrome-launcher \
  karma-coverage \
  karma-jasmine \
  karma-jasmine-html-reporter \
  jasmine-core \
  @types/jasmine
  ```

Check the `package.json` file to see the removed dependencies.

Update `angular.json` to use `jest` instead of `karma`:

Find these lines
```json
{
  "test": {
    "builder": "@angular-devkit/build-angular:karma",
    "options": {
      "polyfills": [
        "zone.js",
        "zone.js/testing"
      ],
      "tsConfig": "tsconfig.spec.json",
      "assets": [
        "src/favicon.ico",
        "src/assets"
      ],
      "styles": [
        "src/styles.css"
      ],
      "scripts": []
    }
  }
}
```

And replace them with these lines
```json
{
  "test": {
    "builder": "@angular-devkit/build-angular:jest",
    "options": {
      "polyfills": ["zone.js", "zone.js/testing"],
      "tsConfig": "tsconfig.spec.json"
    }
  }
}
```

Then update `tsconfig.spec.json` to use `jest` instead of `karma`:

Find these lines
```json
{
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine",
    ]
  }
}
```

And replace them with these lines
```json
{
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["jest"]
  }
}
```
