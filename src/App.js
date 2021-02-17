import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { GlobalContext, GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Header />
        <Home />
        <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default App;
