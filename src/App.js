import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Banner from "./components/Banner/Banner";
import {CartProvider} from "./components/CartContext/CartContext";
import Cart from "./components/Navbar/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  //CartProvider es el componente (context) con la lógica, mediante la prop children todo los hijos <> estan contemplados
  return (
    <CartProvider> 

      <>  
        <div className="App">
          <BrowserRouter>

            <Navbar/>

            <Switch>
              <Route exact path="/">
  
                <div className="banner">
                  <Banner/>
                </div>

                <div className="listContainer">
                  <ItemListContainer/>
                </div>

              </Route>

              <Route path="/category/:idCat">
                <ItemListContainer/>
              </Route>

              <Route path="/item/:idDet">
                <ItemDetailContainer/>
              </Route>
          
              <Route path="/cart">
                <Cart/>
              </Route>

              <Route path="/products">
                <ItemListContainer/>
              </Route>

              <Route path="/checkout">
                <Checkout/>
              </Route>

              <Route path="/contact">
                <Contact/>
              </Route>
            
            </Switch>

            <Footer/>
          
          </BrowserRouter>
        
        </div>
      </>

    </CartProvider>
        );
}

export default App;
