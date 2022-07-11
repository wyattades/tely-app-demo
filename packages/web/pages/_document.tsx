import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native';

// forked from https://github.com/GeekyAnts/native-base-next-adapter/blob/master/document.js

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  html, body, #__next {
    width: 100%;
    /* To smooth any scrolling behavior */
    -webkit-overflow-scrolling: touch;
    margin: 0px;
    padding: 0px;
    /* Allows content to fill the viewport and go beyond the bottom */
    min-height: 100%;
  }
  #__next {
    flex-shrink: 0;
    flex-basis: auto;
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    flex: 1;
  }
  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }
  body {
    display: flex;
    overflow-y: auto;
    overscroll-behavior-y: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: scrollbar;
  }
`;

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async (ctx) => {
  AppRegistry.registerComponent('Main', () => Main);
  // @ts-expect-error getApplication not defined
  const { getStyleElement } = AppRegistry.getApplication('Main');

  const initialProps = await NextDocument.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />
        {getStyleElement()}
      </>
    ),
  };
};

export default Document;
