import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TheLandingPage from "./views/TheLandingPage";
import TheIndex1 from "./pages/TheIndex1";
import TheIndex2 from "./pages/TheIndex2";
import TheIndex3 from "./pages/TheIndex3";
import TheCheckout from "./pages/TheCheckout";
import Register from "./pages/register"
import Signin from "./pages/Signin";

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
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
