import { Suspense } from 'react';
import { Box, Text } from 'native-base';

const LoadingFallback: React.FC = () => {
  return (
    <Box p="16">
      <Text color="gray.400" fontSize="lg" textAlign="center">
        Loading...
      </Text>
    </Box>
  );
};

export const SuspenseLoading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
};
