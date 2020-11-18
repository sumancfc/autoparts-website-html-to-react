import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const App = () => {
  return (
    <>
      <ScrollToTop smooth color='#fff' />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
      </Switch>
    </>
  );
};

export default App;
