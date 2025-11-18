import React from "react";
import { motion } from "framer-motion";
import Chat from "@/assets/images/chat.svg";
import Mic from "@/assets/images/Mic.svg";
import Settings from "@/assets/images/settings.svg";
import Location from "@/assets/images/Location.svg";
import Signal from "@/assets/images/signal.svg";
import Shield from "@/assets/images/shield.svg";
import { sectionVariants, staggerContainer } from "@/components/ui/Animation";
import { FeatureCard } from "../../ui/Cards";
import { useLanguage } from "@/context/LanguageContext";
import { APP_CONTENT } from "@/language/content";

const WhyChooseUs = () => {
  const { language } = useLanguage();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="bg-[#F9FAFB] py-10 md:py-12 px-4 sm:px-8"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-2 sm:mb-4 text-center text-primary">
          {APP_CONTENT.WCU_TITLE[language]}
        </h2>
        <p className="mb-8 sm:mb-12 text-center text-lg">
          {APP_CONTENT.WCU_SUBTITLE[language]}
        </p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <FeatureCard
            bgColor="bg-primary"
            icon={Chat}
            alt="Chat icon"
            title={APP_CONTENT.WCU_CARD1.TITLE[language]}
            description={APP_CONTENT.WCU_CARD1.DESC[language]}
          />
          <FeatureCard
            bgColor="bg-secondary"
            icon={Mic}
            alt="Mic icon"
            title={APP_CONTENT.WCU_CARD2.TITLE[language]}
            description={APP_CONTENT.WCU_CARD2.DESC[language]}
          />
          <FeatureCard
            bgColor="bg-error"
            icon={Settings}
            alt="Settings icon"
            title={APP_CONTENT.WCU_CARD3.TITLE[language]}
            description={APP_CONTENT.WCU_CARD3.DESC[language]}
          />
          <FeatureCard
            bgColor="bg-warning"
            icon={Location}
            alt="Location icon"
            title={APP_CONTENT.WCU_CARD4.TITLE[language]}
            description={APP_CONTENT.WCU_CARD4.DESC[language]}
          />
          <FeatureCard
            bgColor="bg-tertiary"
            icon={Signal}
            alt="Signal icon"
            title={APP_CONTENT.WCU_CARD5.TITLE[language]}
            description={APP_CONTENT.WCU_CARD5.DESC[language]}
          />
          <FeatureCard
            bgColor="bg-primary"
            icon={Shield}
            alt="Shield icon"
            title={APP_CONTENT.WCU_CARD6.TITLE[language]}
            description={APP_CONTENT.WCU_CARD6.DESC[language]}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
export default WhyChooseUs;
