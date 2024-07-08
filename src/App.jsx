import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import './index.css'
import CartPage from './CartPage';
import Home from './Home'
import Footer from './Footer';
import Checkout from './Checkout';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
