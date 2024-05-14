import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ReduxStoreProvider } from "./redux/redux-store-provider";

function App() {
  return (
    <ReduxStoreProvider>
      <RouterProvider router={router} />
    </ReduxStoreProvider>
  );
}

export default App;
