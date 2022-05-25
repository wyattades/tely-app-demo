import type { SolitoAppProps } from 'solito';
import { withBlitz } from 'web/blitzClient';

const BlitzWrapper = withBlitz(function BlitzNoop({ Component, pageProps }) {
  return <Component {...pageProps} />;
});

export const BlitzProvider: React.FC<
  Omit<Partial<SolitoAppProps>, 'Component'>
> = ({ children, ...appProps }) => {
  console.log(appProps.pageProps?.dehydratedProps?.queries);
  return (
    <BlitzWrapper
      pageProps={{}}
      router={null as any}
      {...appProps}
      Component={function Inner() {
        return <>{children}</>;
      }}
    />
  );
};
