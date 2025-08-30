import Button from "../components/Button";
import FloatingIcons from "../components/FloatingIcons";

const HeroSection = () => {
  return (
    <section className="relative text-center text-white pt-19 pb-10">
      <FloatingIcons />
      <h1 className="text-6xl font-bold mb-5 text-primary max-w-2xl mx-auto">Secure & Intuitive Crypto Trading</h1>
      <p className="text-gray-400 max-w-lg mx-auto mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex justify-center gap-4">
        <Button text="Get Started" variant="primary" />
        <Button text="Start Trading" variant="outline" />
      </div>
    </section>
  );
};

export default HeroSection;
