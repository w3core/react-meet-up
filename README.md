# Deep dive into React JS

Training projects for ReactJS

## Chapter-1

How to setup JS project in 2018

### VSCode

Get it here: https://code.visualstudio.com

#### Recommended extensions

To install an extension, run
`code --install-extension <extension-id>`

**Extensions**

christian-kohler.npm-intellisense
christian-kohler.path-intellisense
chrmarti.regex
coderfee.open-html-in-browser
dbaeumer.vscode-eslint
eamodio.gitlens
eg2.vscode-npm-script
esbenp.prettier-vscode
fknop.vscode-npm
formulahendry.auto-close-tag
formulahendry.auto-complete-tag
formulahendry.auto-rename-tag
jasonnutter.search-node-modules
jpoissonnier.vscode-styled-components
jtlowe.vscode-icon-theme
lamartire.git-indicators
ms-vscode.PowerShell
msjsdiag.debugger-for-chrome
PeterJausovec.vscode-docker
shd101wyy.markdown-preview-enhanced
spywhere.guides
streetsidesoftware.code-spell-checker
waderyan.nodejs-extension-pack
xabikos.JavaScriptSnippets

#### Recommended User Settings

Copy/Pase the below into the _File -> Preferences -> Settings -> USER SETTINGS_

```javascript
{
  "workbench.activityBar.visible": true,
  "workbench.sideBar.location": "right",
  "window.menuBarVisibility": "default",
  "files.autoSave": "afterDelay",
  "terminal.integrated.shell.windows": "C:\\WINDOWS\\Sysnative\\WindowsPowerShell\\v1.0\\powershell.exe",
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorBlinking": true,
  "editor.renderWhitespace": "all",
  "workbench.iconTheme": "vscode-icon-theme",
  "workbench.colorCustomizations": {
    "editorWhitespace.foreground": "#488"
  },
  "guides.normal.width": 1,
  "guides.normal.color.dark": "rgba(180, 180, 180, 0.75)",
  "guides.normal.style": "dotted",
  "guides.normal.hideOnSelection": false,
  "guides.active.width": 1,
  "guides.active.color.dark": "rgba(255, 255, 0, 0.75)",
  "guides.active.style": "solid",
  "guides.active.hideOnSelection": false,
  "guides.stack.style": "dotted",
  "guides.stack.hideOnSelection": false,
  "guides.stack.color.dark": "rgba(180, 180, 180, 0.75)",
  "guides.sendUsagesAndStats": false,
  "guides.active.gutter": true,
  "editor.rulers": [120],
  "editor.renderIndentGuides": false,
  "terminal.integrated.scrollback": 9999,
  "npm-intellisense.importLinebreak": ";\n",
  "css.validate": false,
  "scss.validate": false,
  "window.zoomLevel": 0,
  "cSpell.userWords": [
    "HOCs",
    "Transpiler",
    "Truthy",
    "devtool",
    "jsnext",
    "lifecycle",
    "nbsp",
    "polyfill",
    "precache",
    "precommit",
    "prepush",
    "reselect",
    "rgba",
    "stylelint",
    "wdio",
    "webdriverio"
  ],
  "terminal.integrated.rightClickBehavior": "selectWord",
  "gitlens.advanced.messages": {
    "suppressShowKeyBindingsNotice": true
  },
  "gitlens.historyExplorer.enabled": true,
  "gitlens.settings.mode": "advanced",
  "editor.formatOnSave": true,
  "typescript.format.enable": false,
  "typescript.validate.enable": false,
  "javascript.format.enable": false,
  "javascript.validate.enable": false,
  "eslint.autoFixOnSave": true,
  "prettier.eslintIntegration": true
}
```

### Install

`npm i`

### Run

`npm run start`

The application will be available at: `http://localhost:1000`

### Build

`npm run build`

Built application will be available in the root `dist` folder.

### Setup Details

#### package.json

```javascript
.........
"scripts": {
    // Builds the application into the 'dist' folder in production mode.
    // Generates minified index.js, minified index.html.
    "build": "webpack --mode production",

    // Launches the application on localhost, tracks changes in source files
    // and reloads browser when source files are changing
    "start": "webpack-dev-server --mode development",

    // 'precommit' script executes when 'git commit' runs.
    // It runs the 'lint-staged' NPM package (see its settings at the end of this file).
    "precommit": "lint-staged"
  },
  "dependencies": {
    // Replaces inlined (copy/pasted) babel helpers with imported references.
    // Such approach reduces size of of transpiled code.
    // See https://babeljs.io/docs/en/babel-runtime.
    "babel-runtime": "6.26.0",

    // Validates properties passed into React components. See 'propTypes' in the App.jsx
    "prop-types": "15.6.2",

    // ReactJS. That's it!
    "react": "16.5.0",

    // Helpers to render React components into the DOM.
    "react-dom": "16.5.0"
  },
  "devDependencies": {
    // Babel itself.
    "babel-core": "6.26.3",

    // This package allows transpiling JavaScript files using Babel and Webpack.
    // See https://github.com/babel/babel-loader.
    "babel-loader": "7.1.5",

    // A plugin that enables the re-use of Babel's injected helper code to save on code size.
    // See https://babeljs.io/docs/en/babel-plugin-transform-runtime.
    "babel-plugin-transform-runtime": "6.23.0",

    // This preset configures Babel with transpilation settings and EcmaScript features used by Airbnb.
    "babel-preset-airbnb": "2.6.0",

    // Cleans the 'dist' folder.
    // It is useful when some files are deleted and they should not be present in production anymore,
    // especially assets, configs etc., which might break or compromise the application.
    // See https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder.
    "clean-webpack-plugin": "0.1.19",

    // By default, when 'import' statement is used against a folder, node searches an index.js file inside.
    // this plugin allows to search <folder-name>.js files as well, reducing useless index.js files.
    // See https://github.com/shaketbaby/directory-named-webpack-plugin.
    "directory-named-webpack-plugin": "4.0.0",

    // An NPM module to verify source files follow coding conventions.
    // This NPM module is used by VS Code to provide intellisense in the code editor.
    // See https://eslint.org.
    "eslint": "5.5.0",

    // Configuration with Airbnb's coding conventions.
    // See https://github.com/airbnb/javascript.
    "eslint-config-airbnb": "17.1.0",

    // Configures eslint to use webpack.config.js to resolve modules in 'import' statements.
    // See .eslintrc
    "eslint-import-resolver-webpack": "0.10.1",

    // Required by the 'eslint-config-airbnb'.
    "eslint-plugin-import": "2.14.0",

    // Required by the 'eslint-config-airbnb'.
    "eslint-plugin-jsx-a11y": "6.1.1",

    // Required by the 'eslint-config-airbnb'.
    "eslint-plugin-react": "7.11.1",

    // This plugin resolves asset files, like images, fonts, etc.
    // See https://webpack.js.org/loaders/file-loader.
    "file-loader": "2.0.0",

    // This plugin is used to generate index.html from index.ejs template. See the index.ejs.
    // See https://webpack.js.org/plugins/html-webpack-plugin.
    "html-webpack-plugin": "3.2.0",

    // This module grabs staged files (added via 'git add' command), filters them by specified patterns below
    // and passes them to the configured commands.
    "lint-staged": "7.2.2",

    // CLI to run prettier-eslint. This module re-formats and re-writes source files (spacing, paddings etc.)
    // and then runs eslint to verify source files against coding rules.
    "prettier-eslint-cli": "4.7.1",

    // The webpack bundler. See https://webpack.js.org/concepts.
    "webpack": "4.18.0",

    // CLI for webpack commands 'webpack ...'. See the 'scripts' section above for example.
    "webpack-cli": "3.1.0",

    // This module runs application on localhost, tracks changes in source files and reloads browser.
    // See https://webpack.js.org/guides/development/#using-webpack-dev-server.
    "webpack-dev-server": "3.1.8",

    // Generates assets manifest. See https://webpack.js.org/guides/output-management/#the-manifest.
    "webpack-manifest-plugin": "2.0.4",

    // Helpers to extract arguments (aka. 'argv') passed into scripts. See the webpack.config.js
    "yargs": "^12.0.2"
  },

  // This is configuration of the 'lint-staged' NPM module.
  "lint-staged": {
    "*.{js,json,jsx}": [

      // Runs 'prettier-eslint'.
      "prettier-eslint --print-width 120 --write",

      // Source files after re-formatting become un-staged, so they should be staged again.
      "git add"
    ]
  }
```

#### .editorconfig

Editor config is a well-known cross-IDE configuration to align developers using different IDEs with indentation, spacing, line endings (windows/Unix styles) etc.

See https://editorconfig.org.

#### .eslintrc

Configuration file for Eslint to validate coding conventions, in our case Airbnb's guidelines.

#### .babelrc

Configuration for Babel to transpile ES6 code into ES5.

```javascript
{
  "presets": [
    [
      // Use Airbnb preset.
      "airbnb",
      {
        // Remove prop-types in production build.
        "removePropTypes": true
      }
    ],
    [
      "env",
      {
        // A normal mode follows the semantics of ECMAScript 6 as closely as possible.
        // A loose mode produces simpler ES5 code.
        "loose": true,

        // Set it to true if you use UglifyJS (it is used by Webpack in our case).
        // Ensures that the output syntax is supported by uglify.js to minimize our bundles.
        "uglify": true,

        // Ensures that import statements are left as is (opposed to transpiling them to require).
        // It gives Webpack the ability to statically analyze code to produce more efficient bundles.
        "modules": false
      }
    ]
  ],
  "plugins": ["transform-runtime"]
}
```

#### launch.json

VS Code configuration to launch applications.
Current configuration provides ability to debug application in VS Code with breakpoints etc.

#### webpack.config.js

See the `webpack.config.js` with rich comments.

### ES6 Features

See http://es6-features.org
