import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './containers/CartContainer';
import Register from './components/Register';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:idProducto' element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/resetPasword" element={<ResetPassword/>}/>
        <Route path='*' elemen t={<h2>Ruta no encontrada</h2>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
