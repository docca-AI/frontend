import { motion } from "framer-motion";
import HeroImg from "../../assets/images/Hero-img.svg";

import { Stethoscope, Search } from "lucide-react";
import Button from "../ui/Button";


const Hero = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-gradient-to-br from-[#EFF6FF] to-[#F0FDF4] px-4 sm:px-0 py-10 md:py-12"
  >
    <div className="container flex flex-col items-center gap-8 sm:flex-row sm:gap-16">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
        className="w-full md:w-1/2"
      >
        <div>
          <h1 className="text-primary mb-4  leading-tight">
            Your Health, Your Language, Your Community
          </h1>
          <p className="mb-6">
            DOCCA is your AI-powered healthcare assistant designed for Nigeria
            and West Africa. Get instant health insights in English or Pidgin,
            find nearby doctors, and take control of your health journey.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button variant="primary" size="md">
              <Stethoscope className="mr-2" size={20} /> Check Symptoms
            </Button>
            <Button variant="secondary" size="md">
              <Search className="mr-2" size={20} /> Find a Doctor
            </Button>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
        className="w-full md:w-1/2"
      >
        <img
          src={HeroImg}
          alt="Two doctors consulting"
          className="w-full rounded-xl object-cover"
        />
      </motion.div>
    </div>
  </motion.section>
);

export default Hero;
