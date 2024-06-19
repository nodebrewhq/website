import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './theme';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      {/* 👇 Here's the script */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
