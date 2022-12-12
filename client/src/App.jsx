import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { 
BrowserRouter as Router,
Switch,
Redirect,
Route } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";


const App = () => {
 
  const {currentUser: user} = useSelector(state => state.user)

  // const currentUser = useSelector(state => state.user.currentUser)


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products/:category">
          <ProductList />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
          <Login />
        </Route>
        <Route exact path="/register">
        {user ? <Redirect to="/" /> : <Register />}
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;