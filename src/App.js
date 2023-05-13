import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
function App() {
    return (
        <Router>
            <CartProvider>
                <ToastContainer position="bottom-right" />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="*" element={<p>There's nothing here: 404!</p>} />
                </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;
