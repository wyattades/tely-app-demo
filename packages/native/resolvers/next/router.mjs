console.log('Custom resolver for `next/router` loaded.');

export const useRouter = () => {
  console.log(`UNSUPPORTED: next/router useRouter called`);

  return {
    isReady: true,
  };
};
