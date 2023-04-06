import { Provider } from "react-redux";

import AppLayout from "@/component/Layout/Layout";

import { store } from "../store";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
