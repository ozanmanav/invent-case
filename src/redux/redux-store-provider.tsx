import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { Provider } from "react-redux";
import { AppStore, store } from ".";

export const ReduxStoreProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
