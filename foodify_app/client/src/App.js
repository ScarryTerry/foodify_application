import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <AppRouter />
      </BrowserRouter>
    </div>
  );
});

export default App;
