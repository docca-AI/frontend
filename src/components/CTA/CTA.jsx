import { motion } from "framer-motion";
import Button from "../ui/Button";
import Float from "../../assets/images/Float.svg";
import { sectionVariants } from "../ui/Animation";

const CTA = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariants}
    className="bg-gradient-to-r from-[#1a73e8] to-[#34a853] py-16 text-white md:py-24"
  >
    <div className="container mx-auto text-center justify-center items-center flex flex-col px-4">
      <h2 className="mb-4 text-white font-bold md:text-5xl">
        Try DOCCA Now — It's Easy!
      </h2>
      <p className="mb-8 text-white text-lg md:text-xl">
        Join thousands of Nigerians taking control of their health
      </p>
      <Button variant="accent" size="md" className="inline-flex items-center">
        <img
          src={Float}
          className="mr-2 hover:brightness-0 hover:invert"
          size={20}
        />{" "}
        Get Started Free
      </Button>
    </div>
  </motion.section>
);

export default CTA;
