import { useContext } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/Layout";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Informations from "./pages/Informations";
import UsefulInfo from "./pages/UsefulInfo";
import Gallery from "./pages/Gallery";
import Documents from "./pages/Documents";
import Finances from "./pages/Finances";

function App() {
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  const documents = authCtx.isLoggedIn ? (
    <Documents />
  ) : (
    <Redirect to="/pocetna" />
  );

  const finances = authCtx.isLoggedIn ? (
    <Finances />
  ) : (
    <Redirect to="/pocetna" />
  );

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Redirect to="/pocetna" />
          </Route>
          <Route path="/pocetna">
            <HomePage />
          </Route>
          <Route path="/o-nama">
            <AboutUs />
          </Route>
          <Route path="/obavestenja">
            <Informations />
          </Route>
          <Route path="/korisne-informacije">
            <UsefulInfo />
          </Route>
          <Route path="/galerija">
            <Gallery />
          </Route>
          <Route path="/dokumenta">{documents}</Route>
          <Route path="/finansije">{finances}</Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
