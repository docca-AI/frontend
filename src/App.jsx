import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Heros/Hero";
import HowItWorks from "./components/howItWorks/HowItWorks";
import WhyChooseUs from "./components/whyChooseUS/WhyChooseUs";
import Testimonials from "./components/Testemonials/Testemonials";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import CheckSymptoms from "./components/symptoms/CheckSymptoms";
import { Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mt-[80px]">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HowItWorks />
                <WhyChooseUs />
                <Testimonials />
                <CTA />
              </>
            }
          />

          {/* Symptoms Page */}
          <Route path="/symptoms" element={<CheckSymptoms />} />

          {/* Future Pages */}
          {/* <Route path="/find-doctor" element={<FindDoctor />} /> */}
          {/* <Route path="/health-tips" element={<HealthTips />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
