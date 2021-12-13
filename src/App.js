import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleProduct from "./components/singleproduct/SingleProduct";
import Home from "./components/home/Home";
import Header from "./components/Header/Header";
import CartContainer from "./components/cartcontainer/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id">
            <SingleProduct />
          </Route>
          <Route path="/cart">
            <CartContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
