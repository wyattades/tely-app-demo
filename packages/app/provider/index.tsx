import { NativeBaseProvider, StatusBar, useColorMode } from 'native-base';
import { ErrorBoundary } from '@blitzjs/next';
import type { SolitoAppProps } from 'solito';

import { nativeBaseTheme } from 'app/theme';
import { RootErrorFallback } from 'app/components/RootErrorFallback';
import { NavigationProvider } from 'app/provider/navigation';
import { SuspenseLoading } from 'app/provider/loading';
import { SafeAreaProvider } from 'app/provider/safe-area';
import { BlitzProvider } from 'app/provider/blitz';

// must be within `<NativeBaseProvider/>`
const StatusBarTheme: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <StatusBar
      barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
      backgroundColor={colorMode === 'light' ? 'white' : '#222'}
    />
  );
};

// we need to have a separate outer and inner provider because:
// in react-native we wrap the entire app with `<OuterProvider/>`, and wrap EVERY screen in `<InnerProvider/>.
// this lets us access the current screen context within InnerProvider i.e. `useRoute`

export const OuterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NavigationProvider>
      <NativeBaseProvider
        theme={nativeBaseTheme}
        isSSR={typeof window === 'undefined'}
      >
        <StatusBarTheme />
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </NativeBaseProvider>
    </NavigationProvider>
  );
};

// TODO: pass `pageProps` to React context so we can access it anywhere
export const InnerProvider: React.FC<
  Partial<SolitoAppProps> & Pick<SolitoAppProps, 'Component'>
> = ({ Component, ...appProps }) => {
  return (
    <BlitzProvider {...appProps}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <SuspenseLoading>
          <Component />
        </SuspenseLoading>
      </ErrorBoundary>
    </BlitzProvider>
  );
};
