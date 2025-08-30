import { motion } from "framer-motion";
import { sectionVariants, staggerContainer } from "../ui/Animation";
import { TestimonialCard } from "../ui/Cards";

const Testimonials = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={sectionVariants}
    className="py-16 md:py-24"
  >
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-center text-primary text-3xl font-bold">
        What Our Users Say
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        Real stories from real people
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <TestimonialCard
          name="Aisha Suleiman"
          rating="5"
          quote="I used DOCCA when my son was feeling unwell. The diagnosis in Pidgin was so helpful, and we found a good doctor quickly."
        />
        <TestimonialCard
          name="Sola Akinyele"
          rating="5"
          quote="As an okada man, I'm always on the road. DOCCA's voice feature lets me check my health quickly between rides."
        />
        <TestimonialCard
          name="Kemi Hassan"
          rating="4"
          quote="At 60, living in rural northern Nigeria, doctors are far. DOCCA helps me understand my health and find care when needed."
        />
      </motion.div>
    </div>
  </motion.section>
);
export default Testimonials;
