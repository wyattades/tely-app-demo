import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorMode } from 'native-base';

import { HomeScreen } from 'app/features/home/screen';
import { UserDetailScreen } from 'app/features/user/detail-screen';
import { OuterProvider, InnerProvider } from 'app/provider';

const Stack = createNativeStackNavigator<{
  home: undefined;
  'user-detail': {
    id: string;
  };
}>();

const Navigation: React.FC = () => {
  const { colorMode } = useColorMode();

  const screenOptions = {
    headerTitleStyle: {
      color: colorMode === 'light' ? '#222' : 'white',
    },
    headerStyle: {
      backgroundColor: colorMode === 'light' ? 'white' : '#222',
    },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="home"
        options={{
          title: 'Dashboard',
        }}
      >
        {() => <InnerProvider Component={HomeScreen} />}
      </Stack.Screen>
      <Stack.Screen
        name="user-detail"
        options={{
          title: 'User',
        }}
      >
        {() => <InnerProvider Component={UserDetailScreen} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export const App: React.FC = () => {
  return (
    <OuterProvider>
      <Navigation />
    </OuterProvider>
  );
};
