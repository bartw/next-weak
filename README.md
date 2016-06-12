# next-weak

## Setup

```shell
mkdir next-weak
cd next-weak

git init
npm init 

npm install --save angular
npm install --save-dev angular-mocks karma karma-cli karma-jasmine karma-phantomjs-launcher karma-sourcemap-loader karma-webpack phantomjs-prebuilt jasmine-core
npm install --save-dev eslint eslint-config-angular eslint-loader eslint-plugin-angular
npm install --save-dev webpack webpack-dev-server style-loader css-loader raw-loader less-loader less html-webpack-plugin

touch .gitignore
touch README.md

touch webpack.shared.config.js webpack.debug.config.js webpack.release.config.js
touch .eslintrc.json
touch karma.shared.config.js karma.watch.config.js karma.config.js

mkdir src
mkdir src/app
touch src/index.ejs
touch src/tests.js
touch src/app/app.js²
``