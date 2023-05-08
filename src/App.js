import './App.css';
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import CartPage from "./pages/CartPage";

function App() {
  return (
      <Router>
          <Routes>
              <Route index element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
      </Router>
  );
}

export default App;
