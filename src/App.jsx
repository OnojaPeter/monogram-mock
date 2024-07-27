import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CardsSection from './components/Card';
import Cards2Section from './components/Card2';
import CreateSectionSection from './components/CreateConsole';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[#f0efed]'>
      <Navbar />
      <Hero />
      <CardsSection />
      <CreateSectionSection />
      <Cards2Section />
      <Footer />
    </div>
  )
}

export default App
