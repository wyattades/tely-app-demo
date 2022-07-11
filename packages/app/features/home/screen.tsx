import {
  Center,
  HStack,
  Text,
  Heading,
  VStack,
  Button,
  Box,
} from 'native-base';

import { ColorModeSwitch } from 'app/components/ColorModeSwitch';
import { Link } from 'app/components/Link';

const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Text fontFamily="mono" bg="gray.100" _dark={{ bg: 'blueGray.800' }}>
      {' '}
      {children}{' '}
    </Text>
  );
};

export function HomeScreen() {
  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px="4"
    >
      <VStack alignItems="center" space="md">
        {/* <AspectRatio w={40} ratio={1}>
          <Image
            rounded="full"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnickroberts.ninja%2Fwp-content%2Fuploads%2F2017%2F07%2Freact.jpg&f=1&nofb=1"
            alt="NextJS Logo"
            resizeMode="contain"
          />
        </AspectRatio> */}
        <Heading fontSize="3xl">Tely ❤️</Heading>
        <Text>
          Env: API_BASEPATH={process.env.__NEXT_ROUTER_BASEPATH ?? '???'}
        </Text>
        <Text>
          Edit <Code>packages/app/home/screen.tsx</Code> and save to reload.
        </Text>
        <HStack alignItems="center" space="sm">
          <Link href="https://example.com" isExternal>
            <Text
              _light={{ color: 'gray.700' }}
              _dark={{ color: 'gray.400' }}
              underline
              fontSize="xl"
            >
              Example link 1
            </Text>
          </Link>
          <Text>/</Text>
          <Link href="https://example.com" isExternal>
            <Text color="primary.500" underline fontSize="xl">
              Example link 2
            </Text>
          </Link>
        </HStack>
      </VStack>
      <ColorModeSwitch />
      <Box mt="6">
        <Link href="/user/sam">
          <Button pointerEvents="none" variant="outline" colorScheme="coolGray">
            Open User Detail
          </Button>
        </Link>
      </Box>
    </Center>
  );
}
