# Tely - demo of a Next.js/react-native app

A truly cross-platform app. Build UI screens, components, logic, and even backend logic that can be shared across Next.js and react-native.

## Technologies

- react - UI framework
- react-native - native app UI with React
- [Expo](https://docs.expo.dev/) - improves the developer experience of developing and releasing react-native apps
- [react-native-web](https://necolas.github.io/react-native-web/) - render react-native elements in the web
- [NativeBase](https://docs.nativebase.io/) - component library for react-native or react-native-web
- [Next.js](https://nextjs.org/) - full-stack web framework for React
- [Solito](https://solito.dev/) - shared routing logic for Next.js and react-native
- [blitz](https://blitzjs.com/) - zero-api data layer; call server-side code directly from the frontend

## Getting Started

1. Clone the repo
2. Run `yarn` in the root directory
3. - option 1. Run the web dev server (Next.js): `yarn web`
   - option 2. OR, run the native app dev server (Expo): `yarn native`
     - This will prompt you to connect a device or emulator, but Expo will walk you through this.
     - In another terminal, run `yarn web`. This will be our API server. For your device/emulator to connect to this local server, you must do one of the following:
       - connect your computer and mobile device to the same wifi network. modify the `LOCAL_IP` variable to match your computer's ipv4 address
       - use [ngrok](https://ngrok.com/docs), and set `API_BASEPATH` to the origin given by `ngrok`

## Project Structure

There are 2 types of apps: `web` and `native`. They will import code form the `app` package.

- `packages/app/` - shared UI screens, components, and logic
- `packages/web/` - Next.js project. Supports isomorphic rendering of our shared UI &
  - `integrations/` - blitz requires that all queries & mutations be inside a directory named `integrations`, `app`, or `src`, and be within the Next.js project directory
    - `**/queries/` - blitz magic. any file in this directory can be imported directly from frontend code e.g. `useQuery(getUser)`
    - `**/mutations/` - blitz magic. any file in this directory can be imported directly from frontend code e.g. `useMutation(updateUser)`
- `packages/native/` - Expo project

## Manage App Routing/Navigation

- web: use `next.js` routing conventions i.e. the files in `packages/web/pages/` & rewrites/redirects in `packages/web/next.config.mjs`
- native: configure routing using `react-navigation` in `packages/native/App.tsx`
