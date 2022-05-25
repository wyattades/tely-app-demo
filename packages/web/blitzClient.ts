import { AuthClientPlugin } from '@blitzjs/auth';
import { setupBlitzClient } from '@blitzjs/next';
import { BlitzRpcPlugin } from '@blitzjs/rpc';

import { AUTH_COOKIE_PREFIX } from './blitzConfig';

export const { withBlitz } = setupBlitzClient({
  plugins: [
    AuthClientPlugin({
      cookiePrefix: AUTH_COOKIE_PREFIX,
    }),
    BlitzRpcPlugin({
      reactQueryOptions: {
        queries: {
          staleTime: 7000,
        },
      },
    }),
  ],
});
