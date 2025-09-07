import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import Heart from "../../assets/images/Heart.svg";
import Flag from "../../assets/images/flag.svg";
import {
  cardVariants,
  sectionVariants,
  staggerContainer,
} from "../ui/Animation";

const HowItWorks = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariants}
    className="py-10 md:py-12"
  >
    <div className="container mx-auto px-12">
      <h2 className="mb-2 sm:mb-4 text-center text-primary">How DOCCA Works</h2>
      <p className="md-8 sm:mb-12 text-center text-lg">
        Get healthcare assistance in just 3 simple steps
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <motion.div
          variants={cardVariants}
          className="rounded-xl bg-white text-center flex flex-col items-center p-6 shadow-md transition hover:shadow-lg hover:scale-105 duration-200"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
            <Mic size={24} />
          </div>
          <h3 className="mb-2 text-primary ">1. Tell Us Your Symptoms</h3>
          <p className="text-cnter">
            Speak or type your symptoms in English or Pidgin. Our AI understands
            both languages perfectly.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="rounded-xl bg-white text-center flex flex-col items-center p-6 shadow-md transition hover:shadow-lg hover:scale-105 duration-200"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
            <img src={Heart} alt="Heart" className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-primary">2. Get AI Analysis</h3>
          <p className="text-center">
            Our AI analyzes your symptoms against common Nigerian illnesses like
            malaria, typhoid, and more.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="rounded-xl bg-white text-center flex flex-col items-center p-6 shadow-md transition hover:shadow-lg hover:scale-105 duration-200"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-warning">
            <img src={Flag} alt="Flag" className="h-6 w-6 " />
          </div>
          <h3 className="mb-2 text-primary">3. Find Care Nearby</h3>
          <p className="text-center">
            Get self-care advice or find trusted doctors and clinics in your
            area for professional help.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default HowItWorks;
