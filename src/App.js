import { BrowserRouter as Router, Route } from "react-router-dom";
import All from "./components/All";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import TitleBar from "./components/TitleBar";
import { GlobalContext, GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Header />
        <TitleBar />
        <Router>
          <Route exact path="/" component={Home} />
          <Route
            path="/all-anime"
            render={() => <All data={{ type: "anime" }} />}
          />
          <Route
            path="/all-manga"
            render={() => <All data={{ type: "manga" }} />}
          />
          <Route path="/details/:type/:id" component={Details} />
        </Router>
        <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default App;
