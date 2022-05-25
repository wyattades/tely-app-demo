// programatically set environment variables here.
// Metro doesn't transform `process.env`, it's just a plain object

import Constants from 'expo-constants';

const apiBasePath = Constants.manifest?.extra?.API_BASEPATH;
if (!apiBasePath) console.warn('Cannot determine API_BASEPATH');
else console.log('API_BASEPATH:', apiBasePath);

// `@blitzjs/rpc` reads from this environment variable to get it's hostname
if (apiBasePath) process.env.__NEXT_ROUTER_BASEPATH = apiBasePath;

// enable blitz debugging in development
if (process.env.NODE_ENV === 'development') process.env.DEBUG = 'blitz:*';

export {};
