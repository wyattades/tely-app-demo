import type { Ctx } from 'blitz';

const getUser = async ({ userId }: { userId: string }, _ctx: Ctx) => {
  await new Promise((r) => setTimeout(r, 500));

  return {
    id: userId,
    name: `Name-${userId}`,
  };
};

export type UserData = InferPromiseReturn<typeof getUser>;

export default getUser;
