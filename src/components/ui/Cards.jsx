import { cardVariants } from "./Animation";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, alt, title, description, bgColor }) => (
  <motion.div
    variants={cardVariants}
    className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105 duration-200"
  >
    <div
      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-md ${bgColor}`}
    >
      <img src={icon} alt={alt} />
    </div>
    <h3 className="mb-2 text-primary">{title}</h3>
    <p className="">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, location, quote }) => (
  <motion.div
    variants={cardVariants}
    className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105 duration-200"
  >
    <div className="mb-4 flex items-center space-x-3">
      <img
        src={`https://placehold.co/48x48/e2e8f0/64748b?text=${name
          .split(" ")
          .map((n) => n[0])
          .join("")}`}
        alt={`${name}'s profile picture`}
        className="rounded-full"
      />
      <div>
        <div className="font-semibold text-gray-800">{name}</div>
        <div className="text-sm text-gray-500">{location}</div>
      </div>
    </div>
    <p className="text-gray-600">"{quote}"</p>
  </motion.div>
);

export { FeatureCard, TestimonialCard };