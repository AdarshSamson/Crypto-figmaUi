import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";
import BuySellSection from "../sections/BuySellSection";
import CryptoTRade from "../sections/CryptoTrade";
import CryptoServices from "../sections/CryptoServices";
import Footer from "../sections/Footer";
import BackgroundWrapper from "../components/BackgroundWrapper";

const Home = () => {
  return (
    <BackgroundWrapper>
      <Navbar />
      <HeroSection />
      <BuySellSection />
      <CryptoTRade />
      <CryptoServices />
      <Footer />
    </BackgroundWrapper>
  );
};

export default Home;