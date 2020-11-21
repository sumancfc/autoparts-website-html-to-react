import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import singleProduct from "../pages/single-product";
import Wishlist from "../pages/Wishlist";

const App = () => {
  return (
    <>
      <ScrollToTop smooth color='#fff' />
      <Switch>
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/wishlist' exact component={Wishlist} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/product/:id' exact component={singleProduct} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  );
};

export default App;
