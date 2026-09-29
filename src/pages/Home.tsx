import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import CompanyOverview from "../components/Home/CompanyOverview";
import ServicesPreview from "../components/Home/ServicesPreview";
import Testimonials from "../components/Home/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CompanyOverview />
        <ServicesPreview />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
};

export default Home;
