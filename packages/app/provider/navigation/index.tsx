import { useMemo } from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

export const useLocation = () => {
  const route = useRoute();

  return {
    url: route.path,
    pathKey: route.key,
  };
};

export function NavigationProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
            },
          },
        }),
        [],
      )}
    >
      {children}
    </NavigationContainer>
  );
}
