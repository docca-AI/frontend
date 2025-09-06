import Leaf from "../../../assets/images/leaf.svg";
import { SelfCareCard } from "../../ui/Cards";

const SelfCare = () => {
  return (
    <>
      <div className="px-4 sm:px-8">
      <div className="bg-green-50 border-l-4 border-secondary border rounded-lg px-8 py-4">
        <div className="flex items-center space-x-2">
          <div className="">
            <img src={Leaf} alt="Leaf" width={20} height={20} />
          </div>
          <h2>Self-Care</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <SelfCareCard
            title="Rest & Hydration"
            description="Get plenty of rest and drink lots of fluids. ORS solution can help with dehydration."
          />
          <SelfCareCard
            title="Temperature Control"
            description="Use cool compresses and take paracetamol for fever management."
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default SelfCare;
