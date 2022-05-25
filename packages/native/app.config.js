// Expo config docs: https://docs.expo.dev/versions/v45.0.0/config/app

const LOCAL_IP = '192.168.0.159'; // TODO: stop hardcoding my ip
const DEV_SERVER_PORT = 3000;

const apiHost =
  process.env.NODE_ENV === 'development'
    ? LOCAL_IP
      ? `http://${LOCAL_IP}:${DEV_SERVER_PORT}`
      : null
    : 'https://fake-tely-api.zzz'; // TODO: stop hardcoding a fake api host

/** @type {import('@expo/config').AppJSONConfig} */
module.exports = {
  expo: {
    name: 'Tely',
    slug: 'tely',
    version: '1.0.0',
    scheme: 'tely',
    platforms: ['ios', 'android'],
    ios: {
      bundleIdentifier: 'com.tely.mobileapp',
    },
    android: {
      package: 'com.tely.mobileapp',
    },
    extra: {
      API_BASEPATH: apiHost,
    },
  },
};
