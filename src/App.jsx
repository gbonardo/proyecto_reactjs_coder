
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const nombre = "Gaston"
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Descuentos"}/>
    </>
  );
}

export default App;
