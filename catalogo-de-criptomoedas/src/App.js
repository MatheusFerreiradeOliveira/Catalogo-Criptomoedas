import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Import page components
import Catalog from './pages/catalog/catalog';
import AddCrypto from './pages/singleCryptocurrency/addCryptocurrency';
import AboutPage from './pages/about/about'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/catalogo/criptomoeda" component={AddCrypto}/>
        <Route path="/catalogo/sobre" component={AboutPage}/>
        <Route path="/catalogo" component={Catalog}/>
        <Route path="/" component={Catalog}/>
      </Switch>
    </Router>
  );
}

export default App;
