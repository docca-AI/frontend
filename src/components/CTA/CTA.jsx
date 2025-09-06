import { motion } from "framer-motion";
import Button from "../ui/Button";
import Float from "../../assets/images/float.svg";
import { sectionVariants } from "../ui/Animation";

const CTA = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariants}
    className="bg-gradient-accent py-10 text-white md:py-12"
  >
    <div className="container mx-auto text-center justify-center items-center flex flex-col px-4">
      <h1 className="mb-2 sm:mb-4">
        Try DOCCA Now - It's Easy!
      </h1>
      <p className="mb-4 sm:mb-8 text-white text-lg">
        Join thousands of Nigerians taking control of their health
      </p>
      <Button variant="accent" size="md" className="inline-flex items-center">
        <img
          src={Float}
          className="mr-2"
        />{" "}
        Get Started Free
      </Button>
    </div>
  </motion.section>
);

export default CTA;
