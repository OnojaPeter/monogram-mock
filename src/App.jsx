import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/productDetailPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        {/* <PageTop /> */}
        <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
        {/* <ScrollToTopButton /> */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
