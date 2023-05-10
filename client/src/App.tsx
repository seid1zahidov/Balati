import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./views/Home/Home";
import Secont from "./views/secont/Secont";
import { routeArr } from "./routes";
import Footer from "./components/layout/footer/Footer";
import { useEffect } from "react";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routeArr.map((item, index) => (
            <Route index path={item.path} key={index} element={
              <>
                <Navbar />
                <item.component />
              </>
            } />
          ))
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
