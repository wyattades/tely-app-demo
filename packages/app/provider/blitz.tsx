import type { SolitoAppProps } from 'solito';

import { withBlitz } from 'web/blitzClient';

const BlitzWrapper = withBlitz(function BlitzNoop({ Component, pageProps }) {
  return <Component {...pageProps} />;
});

export const BlitzProvider: React.FC<
  Omit<Partial<SolitoAppProps>, 'Component'> & { children: React.ReactNode }
> = ({ children, pageProps, ...appProps }) => {
  // TODO-blitz-bug: `dehydratedState` should be `dehydratedProps`
  if (pageProps?.dehydratedProps)
    pageProps.dehydratedState = pageProps.dehydratedProps;

  return (
    <BlitzWrapper
      pageProps={pageProps || {}}
      router={null as any}
      {...appProps}
      // eslint-disable-next-line react/jsx-no-bind
      Component={function Inner() {
        return <>{children}</>;
      }}
    />
  );
};
