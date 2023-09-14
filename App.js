
import './App.css';
import Categories from './components/Categories';
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Home from './components/Home';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div className="App">
     <Nav/>
     {/* <Home/> */}
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/viewproduct/:id' element={<ViewProduct/>}/>

     </Routes>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
