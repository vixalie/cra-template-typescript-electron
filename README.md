# cra-template-typescript-electron

This is a create-react-app (CRA) template that uses Typescript completely for Electron applications based on the [official TypeScript template for Create React App](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript).

Applications created by this template make everything works with Typescript, both renderer and main. By default, React App as the renderer is located in `src` directory, and the main world is located in `src-main` directory. Due to changes build target, the React App may not run properly in browsers, you should develop your applications in Electron.

## Getting Started

To create a Typescript based Electron application, you need run:

```bash
npx create-react-app my-app --template typescript-electron
```

To start in dev mode, you need run:

```bash
npm start
```

Electron will start while dev server is on and renderer content is ready.

> DO NOT run `npm run start:renderer` directly, React APP will fail to load in browsers.

## Distribution

This template uses [electron-builder](https://www.electron.build/) to package a ready to distribute application.

To distribute the application, run follow commands:

```bash
# For windows
npm run dist:win
# For macOS
npm run dist:mac
# For Linux
npm run dist:linux
```

By default, packaged application will be placed in `dist` directory. Remember to change the author, description, build.appId and build.productName in package.json before creating a distribution.

## Troubleshooting

1. **React APP is not load, console says `require() is not defined`, but not on `preload.js`.**

   You maybe disabled `nodeIntegration` in `webPreferences`. Remember, Webpack and Typescript need `require()`. In another case, you may set Webpack's target to `electron-renderer`, that will also make Electron report `require is not defined` when `nodeIntegration` is `false`.

1. **I got 'Electron failed to install correctly'.**

   Run `npm run fix:electron` to redownload Electron module.

## Special Thanks

This template uses many tools to help developing.

- [concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [wait-on](https://github.com/jeffbski/wait-on)
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
- [customize-cra](https://create-react-app.dev/)
- [electronmon](https://github.com/catdad/electronmon)
- [electron-fix](https://github.com/pangxieju/electron-fix)
