# demo-cra2-ts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) v2 and its built-in supports to TypeScript.

## Steps

### Install `create-react-app`

```sh
yarn global add create-react-app
```

### Create a demo project with `create-react-app`

```sh
create-react-app demo-cra2-ts --typescript
```

The `--typescript` flag will add the main TypeScript package.

The above command would generate output similar as below

```
Creating a new React app in XXX\demo-cra2-ts.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.12.3
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 13 new dependencies.
info Direct dependencies
├─ @types/jest@23.3.9
├─ @types/node@10.12.10
├─ @types/react-dom@16.0.9
├─ @types/react@16.7.6
├─ react-dom@16.6.3
├─ react-scripts@2.1.1
├─ react@16.6.3
└─ typescript@3.1.6
info All dependencies
├─ @types/jest@23.3.9
├─ @types/node@10.12.10
├─ @types/prop-types@15.5.6
├─ @types/react-dom@16.0.9
├─ @types/react@16.7.6
├─ babel-preset-react-app@6.1.0
├─ csstype@2.5.7
├─ react-dev-utils@6.1.1
├─ react-dom@16.6.3
├─ react-error-overlay@5.1.0
├─ react-scripts@2.1.1
├─ react@16.6.3
└─ typescript@3.1.6
Done in 273.88s.
We detected TypeScript in your project (src\App.test.tsx) and created a tsconfig.json file for you.

Your tsconfig.json has been populated with default values.


Initialized a git repository.

Success! Created demo-cra2-ts at XXX\demo-cra2-ts
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd demo-cra2-ts
  yarn start

Happy hacking!

```

### Default `tsconfig.json`

The default `tsconfig.json` is shown as below.

```json
{
  "compilerOptions": {
    "target": "es5",
    "allowJs": true,
    "skipLibCheck": false,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve"
  },
  "include": ["src"]
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
