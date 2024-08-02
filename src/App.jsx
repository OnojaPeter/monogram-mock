import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/productDetailPage';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider >
      <Router>
        <div>
          {/* <PageTop /> */}
          <Navbar />
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
          </Routes>
          {/* <ScrollToTopButton /> */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
