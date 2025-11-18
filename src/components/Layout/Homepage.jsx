import Hero from "@/components/Layout/Heros/Hero";
import HowItWorks from "@/components/Layout/howItWorks/HowItWorks";
import WhyChooseUs from "@/components/Layout/whyChooseUS/WhyChooseUs";
import Testimonials from "@/components/Layout/Testemonials/Testemonials";
import CTA from "@/components/Layout/CTA/CTA";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[70px] lg:pt-[80px]">
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
};

export default Homepage;
