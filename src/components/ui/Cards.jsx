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

const TestimonialCard = ({ name, rating, quote }) => {
  // Clamp rating between 0 and 5
  const safeRating = Math.max(0, Math.min(5, rating));
  return (
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
          <div className="font-semibold text-secondary">{name}</div>
          <div className="text-lg text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) =>
              i < safeRating ? "★" : "☆"
            )}
          </div>
        </div>
      </div>
      <p className="text-gray-600">"{quote}"</p>
    </motion.div>
  );
};

const SelfCareCard = ({ title, description }) => (
  <motion.div
    variants={cardVariants}
    className="shadow-md transition hover:shadow-lg hover:scale-105 duration-200"
  >
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-secondary mb-1">{title}</h4>
          <p className="text-xs text-mid-gray">{description}</p>
        </div>
  </motion.div>
);

export { FeatureCard, TestimonialCard, SelfCareCard };
