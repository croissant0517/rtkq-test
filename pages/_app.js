import { Provider } from "react-redux";

import AppLayout from "@/component/Layout/Layout";

// import { store } from "../store";
import { wrapper } from "../store";

import "@/styles/globals.css";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
