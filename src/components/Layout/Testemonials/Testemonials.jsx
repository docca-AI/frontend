import { motion } from "framer-motion";
import { sectionVariants, staggerContainer } from "../../ui/Animation";
import { TestimonialCard } from "@/components/ui/Cards";
import { useLanguage } from "@/context/LanguageContext";
import { APP_CONTENT } from "@/language/content";

const Testimonials = () => {
  const { language } = useLanguage();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="py-10 md:py-12 px-4 sm:px-8"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-2 sm:mb-4 text-center text-primary">
          {APP_CONTENT.TEST_TITLE[language]}
        </h2>
        <p className="mb-6 sm:mb-12 text-center text-lg">
          {APP_CONTENT.TEST_SUBTITLE[language]}
        </p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <TestimonialCard
            name="Aisha Suleiman"
            rating="5"
            quote={APP_CONTENT.TEST_QUOTE1[language]}
          />
          <TestimonialCard
            name="Sola Akinyele"
            rating="5"
            quote={APP_CONTENT.TEST_QUOTE2[language]}
          />
          <TestimonialCard
            name="Kemi Hassan"
            rating="4"
            quote={APP_CONTENT.TEST_QUOTE3[language]}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
