import React from "react";
import { motion } from "framer-motion";
import Chat from "../../assets/images/Chat.svg";
import Mic from "../../assets/images/Mic.svg";
import Settings from "../../assets/images/Settings.svg";
import Location from "../../assets/images/Location.svg";
import Signal from "../../assets/images/Signal.svg";
import Shield from "../../assets/images/Shield.svg";
import { sectionVariants, staggerContainer } from "../ui/Animation";
import { FeatureCard } from "../ui/Cards";

const WhyChooseUs = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariants}
    className="bg-[#E5E7EB] py-16 md:py-24"
  >
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-center text-3xl font-bold">Why Choose DOCCA?</h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        Healthcare made accessible for everyone
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <FeatureCard
          bgColor="bg-primary"
          icon={Chat}
          alt="Chat icon"
          title="English & Pidgin Support"
          description="Communicate in your preferred language - English or Nigerian Pidgin."
        />
        <FeatureCard
          bgColor="bg-secondary"
          icon={Mic}
          alt="Mic icon"
          title="Voice & Text Input"
          description="Speak or type your symptoms - whatever works best for you."
        />
        <FeatureCard
          bgColor="bg-error"
          icon={Settings}
          alt="Settings icon"
          title="Local Health Focus"
          description="Specialized knowledge of Nigerian illnesses like malaria and typhoid."
        />
        <FeatureCard
          bgColor="bg-warning"
          icon={Location}
          alt="Location icon"
          title="Find Nearby Doctors"
          description="Connect with trusted healthcare professionals in your area."
        />
        <FeatureCard
          bgColor="bg-tertiary"
          icon={Signal}
          alt="Signal icon"
          title="Data-Friendly"
          description="Designed to work efficiently even with limited internet connectivity."
        />
        <FeatureCard
          bgColor="bg-primary"
          icon={Shield}
          alt="Shield icon"
          title="Privacy Protected"
          description="Your health information is secure and confidential."
        />
      </motion.div>
    </div>
  </motion.section>
);

export default WhyChooseUs;
