import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

import { useUser } from "reactfire";

import Auth from "./Auth";
import Counter from "./components/Counter";

function App() {
  const user = useUser();
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          {user && (
            <div>
              <p>Hola!</p>
              <p>Iniciaste sesión con {user.email}</p>
            </div>
          )}
          <Auth />
        </header>
        <div></div>

        <div></div>
      </div>
    </Provider>
  );
}

export default App;
