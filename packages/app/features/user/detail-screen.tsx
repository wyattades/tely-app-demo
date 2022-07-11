import { createParam } from 'solito';
import {
  Center,
  Heading,
  Button,
  Box,
  ChevronLeftIcon,
  Text,
} from 'native-base';

import getUser from 'web/integrations/queries/getUser';
import { useRpcQuery } from 'web/lib/rpc';
import { ColorModeSwitch } from 'app/components/ColorModeSwitch';
import { Link } from 'app/components/Link';

const { useParam } = createParam<{ id: string }>();

export function UserDetailScreen() {
  const [userId] = useParam('id', { initial: '_' });

  const [user] = useRpcQuery(getUser, { userId });

  return (
    <Center
      flex="1"
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <Heading fontSize="3xl">Hey there, {user.name}! 👋</Heading>
      <Text>Id: {user.id}</Text>
      <Box mt="6">
        <Link href="/">
          <Button
            pointerEvents="none"
            leftIcon={<ChevronLeftIcon size="xs" />}
            variant="outline"
            colorScheme="coolGray"
          >
            Go Back
          </Button>
        </Link>
      </Box>
      <ColorModeSwitch />
    </Center>
  );
}
