import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store, persistor } from "redux/store";
import { SmingModalProvider } from "sming-payments";

import App from "./App";
import ErrorBoundary from "component/Wrapper/ErrorBoundary/ErrorBoundary";

import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start({
    serviceWorker: {
      url: "/react-shopping-cart/mockServiceWorker.js",
    },
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter basename="/react-shopping-cart">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary fallback={<div>에러입니다.</div>}>
          <SmingModalProvider>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </SmingModalProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
