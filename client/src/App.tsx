import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./views/Home/Home";
import Footer from "./components/layout/footer/Footer";
import Product from "./views/Product/Product";
import SingleProduct from "./views/ProductsDetails/Index"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
