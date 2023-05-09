import './App.css';
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import CartPage from "./pages/CartPage";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
      <Router>
          <CartProvider>
              <ToastContainer position="bottom-right"/>
              <Routes>
                  <Route index element={<HomePage />} />
                  <Route path="home" element={<HomePage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="*" element={<p>There's nothing here: 404!</p>} />
              </Routes>
          </CartProvider>
      </Router>
  );
}

export default App;
