import Header from "./components/Header";
import Home from "./components/Home";
import { GlobalContext, GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Header />
        <Home />
      </GlobalContextProvider>
    </>
  );
}

export default App;
