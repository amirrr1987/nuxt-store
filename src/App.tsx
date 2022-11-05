import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TheLandingPage from "./views/TheLandingPage";
import TheIndex1 from "./pages/TheIndex1";
import TheIndex2 from "./pages/TheIndex2";
import TheIndex3 from "./pages/TheIndex3";
import TheCheckout from "./pages/TheCheckout";
import Register from "./pages/TheRegister"
import Signin from "./pages/TheSignin";
import TheProductDetail from "./pages/TheProductDetail";
import TheShoppingCart from "./pages/TheShoppingCart";
import TheProductsList from "./pages/TheProductsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TheLandingPage />}>
            <Route path="/" element={<TheIndex1 />}></Route>
            <Route path="/2" element={<TheIndex2 />}></Route>
            <Route path="/3" element={<TheIndex3 />}></Route>
            <Route path="/checkout" element={<TheCheckout />}></Route>
            <Route
              path="/product-detail"
              element={<TheProductDetail />}
            ></Route>
            <Route path="/shopping-cart" element={<TheShoppingCart />}></Route>
            <Route path="/products-list" element={<TheProductsList />}></Route>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
