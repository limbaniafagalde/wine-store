import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <ItemListContainer greeting = "Aqui van los items" />
      </div>
    </>
  );
}

export default App;
