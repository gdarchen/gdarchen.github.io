<div align="center">
<h1><a href="https://gdarchen.github.io/">gdarchen.github.io</a> 👋</h1>

[![last commit](https://badgen.net/github/last-commit/gdarchen/gdarchen.github.io?icon=https://simpleicons.now.sh/git/fff)](https://github.com/gdarchen/gdarchen.github.io)
[![yarn version](https://img.shields.io/badge/v1.22-4684B0.svg?logo=yarn&logoColor=white&label=Yarn)](https://yarnpkg.com/)
[![node version](https://img.shields.io/badge/%3E=14.0.0-3C873A.svg?logo=node.js&logoColor=white&label=node)](https://nodejs.org/en/)

This project contains the code my portfolio website, available at [here](https://gdarchen.github.io/).

</div>

## 👨‍💻 Contributing

Here is how to setup the project locally to contribute:

1. Clone the repository:
   ```bash
   $ git clone git@github.com:gdarchen/gdarchen.github.io.git
   ```
2. Install the dependencies using `yarn` as follows:
   ```bash
   $ yarn install
   ```
   > This command not only install both the `dependencies` and `devDependencies`, but also set up the Git hooks.
   >
   > Depending on your version of `yarn`, [it might require a change](https://typicode.github.io/husky/#/?id=manual) in the `package.json` file, in the `scripts` section:
   >
   > - `yarn@^1`: use the `"postinstall": "husky install"` script
   > - `yarn@^2`: use the `"prepare": "husky install"` script
   >
   > We use two Git hooks:
   >
   > - one to ensure to run [`prettier`](https://prettier.io/) on each staged file
   > - one to run [`commitlint`](https://github.com/conventional-changelog/commitlint) so as to ensure commit follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/)
3. Run the application locally:
   ```bash
   $ yarn start
   ```

## 📦 Deploy

The code is hosted thanks to [GitHub Pages](https://pages.github.com/).

To deploy a new version, run the following command:

```bash
$ yarn deploy
```
