import { Link as SolitoLink } from 'solito/link';
import { Link as NBLink } from 'native-base';

export const Link: React.FC<{
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
}> = ({ href, isExternal, children }) => {
  // const isLocal = href.startsWith('/');

  if (isExternal) {
    return <NBLink href={href}>{children}</NBLink>;
  } else {
    return <SolitoLink href={href}>{children}</SolitoLink>;
  }
};
