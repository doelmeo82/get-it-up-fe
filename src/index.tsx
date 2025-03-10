import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './hooks/store';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../src/style/index.scss';
import { tabsTheme } from './theme/tab';
import { checkboxTheme } from './theme/checkbox';
import WebsocketProvider from './context/WebsocketProvider';
import { SocketContext,socket } from './context/SocketIOProvider';
const theme = extendTheme({
  components: {
    Tabs: tabsTheme,
    Checkox: checkboxTheme,
  },
  fonts: {
    body: '\'Noto Sans\', sans-serif',
  },
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <SocketContext.Provider value={{socket:socket}}> */}
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
    {/* </SocketContext.Provider> */}
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
