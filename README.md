# demo-cra2-ts

This is a demo project based on `create-react-app` v2 and its supports to TypeScript.

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

## tsconfig.json

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
  "include": [
    "src"
  ]
}
```
