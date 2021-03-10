import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ListUser } from "./components/ListUser";
import { CreateUser } from "./components/CreateUser";
import { EditUser } from "./components/EditUser";
import { DetailUser } from "./components/DetailUser";

import { GlobalProvider } from "./context/GlobalState";
// import TestUser from "./components/TestUser";

function App() {
  return (
    <GlobalProvider>
        <header className="text-center">
          <h2>Crocodic Test</h2>
        </header>
        <Switch>
          <Route path="/" component={ListUser} exact />
          <Route path="/create" component={CreateUser} exact />
          <Route path="/edit/:id" component={EditUser} exact />
          <Route path="/detail/:id" component={DetailUser} exact />
        </Switch>

        {/* <div className="container">
          <h2>Backend DataTest</h2>

          <TestUser />
        </div> */}
    </GlobalProvider>
  );
}

export default App;
