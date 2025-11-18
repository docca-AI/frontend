import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import Heart from "@/assets/images/Heart.svg";
import Flag from "@/assets/images/flag.svg";
import {
  cardVariants,
  sectionVariants,
  staggerContainer,
} from "../../ui/Animation";
import { useLanguage } from "@/context/LanguageContext";
import { APP_CONTENT } from "@/language/content";

const HowItWorks = () => {
  const { language } = useLanguage();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="py-10 md:py-12 px-4 sm:px-8"
    >
      <div className="container mx-auto px-12">
        <h2 className="mb-2 sm:mb-4 text-center text-primary">
          {APP_CONTENT.HIW_TITLE[language]}
        </h2>
        <p className="md-8 sm:mb-12 text-center text-lg">
          {APP_CONTENT.HIW_SUBTITLE[language]}
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
            <h3 className="mb-2 text-primary ">
              {APP_CONTENT.HIW_CARD1_TITLE[language]}
            </h3>
            <p className="text-center">
              {APP_CONTENT.HIW_CARD1_DESC[language]}
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="rounded-xl bg-white text-center flex flex-col items-center p-6 shadow-md transition hover:shadow-lg hover:scale-105 duration-200"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
              <img src={Heart} alt="Heart" className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-primary">
              {APP_CONTENT.HIW_CARD2_TITLE[language]}
            </h3>
            <p className="text-center">
              {APP_CONTENT.HIW_CARD2_DESC[language]}
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="rounded-xl bg-white text-center flex flex-col items-center p-6 shadow-md transition hover:shadow-lg hover:scale-105 duration-200"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-warning">
              <img src={Flag} alt="Flag" className="h-6 w-6 " />
            </div>
            <h3 className="mb-2 text-primary">
              {APP_CONTENT.HIW_CARD3_TITLE[language]}
            </h3>
            <p className="text-center">
              {APP_CONTENT.HIW_CARD3_DESC[language]}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
