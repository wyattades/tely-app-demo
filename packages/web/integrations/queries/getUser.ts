import type { Ctx } from 'blitz';

const getUser = async ({ userId }: { userId: string }, _ctx: Ctx) => {
  await new Promise((r) => setTimeout(r, 500));

  return {
    id: userId,
    name: `Name-${userId}`,
  };
};

// TODO-blitz-bug: blitz does not automatically determine the queryKey server-side
getUser._routePath = '/api/rpc/getUser';

export type UserData = InferPromiseReturn<typeof getUser>;

export default getUser;
