import { AuthServerPlugin, simpleRolesIsAuthorized } from '@blitzjs/auth';
import { setupBlitzServer } from '@blitzjs/next';

import { AUTH_COOKIE_PREFIX } from './blitzConfig';

// CSRF is not applicable on native apps, so disable it for now
// TODO: enable on web but not native somehow...
process.env.DANGEROUSLY_DISABLE_CSRF_PROTECTION = '1';

export const {
  api: wrapApi,
  gSP: wrapGSP,
  gSSP: wrapGSSP,
} = setupBlitzServer({
  plugins: [
    AuthServerPlugin({
      cookiePrefix: AUTH_COOKIE_PREFIX,
      isAuthorized: simpleRolesIsAuthorized,
      storage: null as any, // TODO
    }),
  ],
});
