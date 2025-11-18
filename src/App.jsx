import { Route, Routes } from "react-router-dom";
import Header from "@/components/Layout/header/Header";
import Homepage from "@/components/Layout/Homepage";
import Footer from "@/components/Layout/Footer/Footer";
import CheckSymptoms from "@/components/symptoms/CheckSymptoms";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={<Homepage />}
          />

          {/* Symptoms Page */}
          <Route path="/symptoms" element={<CheckSymptoms />} />

          {/* Future Pages */}
          {/* <Route path="/find-doctor" element={<FindDoctor />} /> */}
          {/* <Route path="/health-tips" element={<HealthTips />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
