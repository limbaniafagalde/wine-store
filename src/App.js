import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";


function App() {
  
  return (
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
        
          </Switch>
      
        </BrowserRouter>
      
      </div>
    </>
  );
}

export default App;
