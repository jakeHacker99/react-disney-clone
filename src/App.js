import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Detail from "./Componenets/Detail";
import Header from "./Componenets/Header";
import Home from "./Componenets/Home";
import Login from "./Componenets/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
