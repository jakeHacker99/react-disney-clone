import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Componenets/Header";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
