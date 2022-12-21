import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Tienda gourmet de asados"} />
    </>
  );
}

export default App;
