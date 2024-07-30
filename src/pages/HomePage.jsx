import Hero from '../components/Hero';
import CardsSection from '../components/Card';
import Cards2Section from '../components/Card2';
import CreateSectionSection from '../components/CreateConsole';

const HomePage =()=> {
    return(
        <div className='bg-[#f0efed]'>
            <Hero />
            <CardsSection />
            <CreateSectionSection />
            <Cards2Section />
        </div>
    )
}

export default HomePage