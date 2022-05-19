## How to generate components?

`npm run generate component-name` run this command for generating a component with all the required files

## How to run the package locally without publishing?

Download the project

1. `npm i`
2. `cd ./node_modules/react`
3. `npm link`

Now, Go to the repository you want to download the package to.

1. `npm i ../package-folder-name`(relative path to the package)
2. `npm link react`

Now, run the your project. The package is installed and working.

#### To check what folders/files `.npmignore` will allow inside published package

`npm pack && tar -xvzf *.tgz && rm -rf package *.tgz`

#### Rules:

- Do not use `rem` use `px` for css.
- If a component is removed/deleted make sure to remove \
  it's export from `src/index.ts` as well.
- Do not turn off tsconfig.json `strict` flag.
