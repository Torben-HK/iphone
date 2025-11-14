import Hero from '../components/Hero';
import ShowcaseCarousel from '../components/ShowcaseCarousel';
import InteractiveModel from '../components/InteractiveModel';
import ServiceHighlights from '../components/ServiceHighlights';
import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="bg-black">
      <Hero />
      <ShowcaseCarousel />
      <InteractiveModel />
      <ServiceHighlights />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
