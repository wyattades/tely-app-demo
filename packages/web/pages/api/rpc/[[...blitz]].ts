import { rpcHandler } from '@blitzjs/rpc';

import { wrapApi } from 'web/blitzServer';

export default wrapApi(
  rpcHandler({
    onError: (error) => {
      console.log('RPC error:');
      console.error(error);
    },
  }),
);
