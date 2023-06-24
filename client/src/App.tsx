import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./views/Home/Home";
import Footer from "./components/layout/footer/Footer";
import Product from "./views/Product/Product";
import SingleProduct from "./views/ProductsDetails/index"
import Error from "./components/core/error/Error";
import CardDetails from "./components/pages/Carddetails/CardDetails";
import About from "./views/about/About";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/card-details' element={<CardDetails />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
