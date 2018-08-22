# Dive deep into React!
The React Meet Up is a public event to dive deeply in modern and accurate approaches in React development.
All topics are technical and are focused on professional development and solving of issues in real-world React applications.
We will start from basics, so it is also great opportunity to start with us!
All you need to be ready for the React Meet Up is light knowledge in JavaScript and middle knowledge in CSS3/HTML5.
Bring good mood with you!

## Chapter 1

### Table of contents

1. VSCode, basic settings and plugins, .editorconfig

2. Creating of NodeJS project
    1. What is package.json file
    2. Basic package.json configuration

3. Webpack module bundler
    1. Building of project by using of Webpack
    2. Real-time debugging by using of Webpack Dev Server
    3. Configuring of webpack.config.js
    4. Building of index.html by using of html-webpack-plugin
    5. Creating of production/static bundle

4. Babel Javascript compiler
    1. Installing Babel into project
    2. Configuring of .babelrc file

5. ESLint installation and configuration

6. ES6. Most useful syntax sugar.
    1. Constants
    2. Arrow functions
    3. Function default parameter values and ...rest parameters
    4. Spread operator
    5. Template Literals
    6. Enhanced Object Properties
    7. Destructuring Assignment
    8. Array and Object iterators
    9. Promise


### References

* [EditorConfig][.editorconfig]
* [Specifics of npm's package.json handling][package.json]
* [Working with package.json][Working with package.json]
* [Webpack module bundler][Webpack]
* [Webpack Dev Server][webpack-dev-server]
* [HTML Webpack Plugin][html-webpack-plugin]
* [Clean Webpack Plugin][clean-webpack-plugin]
* [Babel][Babel]
* [Webpack plugin for Babel][babel-loader]
* Common Babel presets used in project:
    * [babel-preset-env][babel-preset-env]
    * [babel-preset-react][babel-preset-react]
* [ESLint - The pluggable linting utility for JavaScript and JSX][ESLint]
* [ESLint plugin with rules that help validate proper imports][eslint-plugin-import]
* [React specific linting rules for ESLint][eslint-plugin-react]
* [A wrapper for Babel's parser used for ESLint][babel-eslint]
* [ES6 syntax sugar][ES6]

### VSCode - a lightweight but powerful source code editor not only for React

Official site: [https://code.visualstudio.com/](https://code.visualstudio.com/)

#### Useful extensions:

* Babel JavaScript (by Michael McDermott)
* Color Highlight (Sergii Naumov)
* EditorConfig for VS Code (by EditorConfig)
* ESLint (by Dirk Baeumer)

My VSCode settings:
```json
{
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "files.trimTrailingWhitespace": true,
    "editor.renderWhitespace": "all",
    "workbench.startupEditor": "none",
    "workbench.editor.enablePreview": false,
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "eslint.autoFixOnSave": true,
    "files.eol": "\n",
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/node_modules": true,
        "**/package-lock.json": true
    },
    "javascript.validate.enable": false,
    "git.enableSmartCommit": true
}
```


[package.json]: https://docs.npmjs.com/files/package.json
[Working with package.json]: https://docs.npmjs.com/getting-started/using-a-package.json
[Webpack]: https://webpack.js.org/concepts/
[webpack-dev-server]: https://webpack.js.org/guides/development/#using-webpack-dev-server
[html-webpack-plugin]: https://github.com/jantimon/html-webpack-plugin
[clean-webpack-plugin]: https://github.com/johnagan/clean-webpack-plugin
[Babel]: http://babeljs.io/docs/en
[babel-loader]: https://github.com/babel/babel-loader
[babel-preset-env]: https://babeljs.io/docs/en/babel-preset-env/
[babel-preset-react]: https://babeljs.io/docs/en/babel-preset-react
[ESLint]: https://eslint.org/
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[babel-eslint]: https://github.com/babel/babel-eslint
[.editorconfig]: https://editorconfig.org/
[VSCode]: https://code.visualstudio.com/
[ES6]: http://es6-features.org
