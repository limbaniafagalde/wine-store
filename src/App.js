import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import {CartProvider} from "./components/CartContext/CartContext";
import Cart from "./components/Navbar/Cart/Cart";

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

            </Switch>
        
          </BrowserRouter>
        
        </div>
      </>

    </CartProvider>
        );
}

export default App;
