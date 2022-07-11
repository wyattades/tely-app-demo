import { Box, Text, Button } from 'native-base';
import type { ErrorFallbackProps } from '@blitzjs/next';

import { Link } from 'app/components/Link';

export const RootErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  const statusCode = (error as any)?.statusCode;

  return (
    <Box p="10">
      <Text fontSize="4xl">Error!</Text>
      <Text>Message: {error.message || error.name}</Text>
      {statusCode != null ? <Text>Code: {statusCode}</Text> : null}
      <Link href="/">
        <Button mt="8" pointerEvents="none">
          Go home
        </Button>
      </Link>
    </Box>
  );
};
