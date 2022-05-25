// TEMP fix: blitz calls `window.addEventListener` in the top-level scope, which is unsupported in `react-native`
if (typeof window !== 'undefined') {
  if (!window.addEventListener) {
    window.addEventListener = (eventName: string) => {
      console.log(`UNSUPPORTED: window.addEventListener called "${eventName}"`);
    };
    window.removeEventListener = (eventName: string) => {
      console.log(
        `UNSUPPORTED: window.removeEventListener called "${eventName}"`,
      );
    };
  }

  if (!globalThis.localStorage) {
    const memStorage = {};
    globalThis.localStorage = window.localStorage || {
      getItem: (key) => {
        // console.log(`UNSUPPORTED: localStorage.getItem called "${key}"`);
        return memStorage[key] ?? null;
      },
      setItem: (key, value) => {
        // console.log(`UNSUPPORTED: localStorage.setItem called "${key}"`);
        memStorage[key] = `${value}`;
      },
    };
  }
}
