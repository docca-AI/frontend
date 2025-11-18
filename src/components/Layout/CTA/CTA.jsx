import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Float from "@/assets/images/float.svg";
import { sectionVariants } from "../../ui/Animation";
import { useLanguage } from "@/context/LanguageContext";
import { APP_CONTENT } from "@/language/content";

const CTA = () => {
  const { language } = useLanguage();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="bg-gradient-accent py-10 text-white md:py-12 px-4 sm:px-8"
    >
      <div className="container mx-auto text-center justify-center items-center flex flex-col">
        <h1 className="mb-2 sm:mb-4">{APP_CONTENT.CTA_TITLE[language]}</h1>
        <p className="mb-4 sm:mb-8 text-white text-lg">
          {APP_CONTENT.CTA_SUBTITLE[language]}
        </p>
        <Button variant="accent" size="md" className="inline-flex items-center">
          <img src={Float} className="mr-2" /> {APP_CONTENT.CTA_BTN[language]}
        </Button>
      </div>
    </motion.section>
  );
};

export default CTA;
