import { motion } from "framer-motion";
import HeroImg from "@/assets/images/Hero-img.svg";
import { Stethoscope, Search } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { APP_CONTENT } from "@/language/content";

const Hero = () => {
  const { language } = useLanguage();

  return (
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
            <h1 className="text-primary mb-4 leading-tight">
              {APP_CONTENT.HERO_TITLE[language]}
            </h1>
            <p className="mb-6">{APP_CONTENT.HERO_SUBTITLE[language]}</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button variant="primary" size="md">
                <Stethoscope className="mr-2" size={20} />{" "}
                {APP_CONTENT.HERO_BTN_SYMPTOMS[language]}
              </Button>
              <Button variant="secondary" size="md">
                <Search className="mr-2" size={20} />{" "}
                {APP_CONTENT.HERO_BTN_DOCTOR[language]}
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
};

export default Hero;
