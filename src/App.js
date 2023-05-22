
import ProductContextProvider from './context/ProductContextProvider';
import Products from './components/Products';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Search from './components/Search';
import Store from './components/Store';
import ProductsDetail from './shared/ProductsDetail';
import CartcontextProvider from './context/CartcontextProvider';
import ShopCart from './components/ShopCart';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Burger from './components/Burger.js';

function App() {
  return (
    <>
    <ProductContextProvider >
      <CartcontextProvider>
    <Search/>
    <Burger/>
    <Switch>
     
    <Route exact path="/" component = {Landing} />
      <Route path="/Parfum" component = {Store}  />
      <Route path="/Pflege" component = {Store}  />
      <Route path="/Neu" component = {Products} />
      <Route path="/Makeup" component = {Products} />
      <Route path="/Home" component = {Landing} />
      <Route path="/SignUp" component = {SignUp} />
      <Route path="/Login" component = {Login} />
      <Route path="/Marken/:id" component = {ProductsDetail} />
      <Route path="/Marken" component = {Store} />
      <Route path="/Cart" component={ShopCart} />
      <Redirect to ="/"/>
    </Switch>
    <Logo/>
    <Footer/>
    </CartcontextProvider>
    </ProductContextProvider>
    </>
  );
}

export default App;
