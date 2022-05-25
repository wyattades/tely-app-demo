import { wrapGSSP } from 'web/blitzServer';
import getUser from 'web/integrations/queries/getUser';

export const getServerSideProps = wrapGSSP(async ({ params, ctx }) => {
  console.log('session user id:', ctx.session.userId);

  const userId = params!.id as string;

  await ctx.prefetchQuery(getUser, { user_id: userId });

  console.log('Prefetched user:', userId);

  return { props: {} };
});

export { UserDetailScreen as default } from 'app/features/user/detail-screen';
