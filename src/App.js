// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/nav";
import Banners from "./Components/banners";
import ProductCard from "./Components/productCard";
import Footer from "./Components/footer";
import ProductDetail from "./Components/productDetails";
import Cart from "./Components/cart";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
      <Route
          path="/"
          element={<div><Banners/> <div className='product-card-list'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          </div></div>}
        ></Route>
        <Route
          path="/Home"
          element={<div><Banners/> <div className='product-card-list'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          </div></div>}
        ></Route>
        <Route
          path="/product"
          element={<ProductDetail/>}
        ></Route>
        <Route
          path="/cart"
          element={ <Cart />}
        ></Route>
      </Routes>
      {/* <Banners/>
     <div className='product-card-list'>
     <ProductCard />
     <ProductCard />
     <ProductCard />
     <ProductCard />
     <ProductCard />
     </div> */}
      {/* <ProductDetail/> */}
     

      <Footer />
    </div>
  );
}

export default App;
