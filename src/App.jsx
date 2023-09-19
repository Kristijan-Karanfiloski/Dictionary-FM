import RootLayout from "./components/RootLayout.jsx";
import store from "./store/store.jsx";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <>
          <RootLayout />
        </>
      </Provider>
    </>
  );
}

export default App;
