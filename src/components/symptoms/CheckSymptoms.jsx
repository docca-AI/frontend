"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mic, Send, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Bot from "../../assets/images/Bot.svg";
import Leaf from "../../assets/images/leaf.svg";
import Button from "../ui/Button";
import { VoiceInput } from "../ui/Input";
import SelfCare from "./selfCafe/SelfCare";
import { SelfCareCard } from "../ui/Cards";

const CheckSymptoms = () => {
  const navigate = useNavigate();
  return (
    // {/* Modal */}
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="container mt-30"
      >
        <div className="rounded-2xl shadow-2xl mx-auto flex flex-col h-[80vh]">
          <div className="container flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img src={Bot} alt="Bot" />
              </div>
              <div>
                <h1 className="text-primary">DOCCA</h1>
                <p className="text-xs text-neutral-dark">AI Health Checker</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/")}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="divider w-full"></div>

          <div className="flex-1 overflow-y-auto space-y-4">
            <div className="container">
              {/* First DOCCA Message */}
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-md">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <img src={Bot} alt="Bot" />
                  </div>
                  <div>
                    <div className="p-4 rounded-2xl bg-primary text-white rounded-tl-sm">
                      <p>
                        Hello! I'm DOCCA, your AI health assistant. I can help
                        you understand your symptoms and guide you to the right
                        care.
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <Button variant="tertiary" size="sm">
                        Start Health Check
                      </Button>
                      <Button variant="tertiary" size="sm">
                        Find a Doctor
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Response */}
              <div className="flex justify-end">
                <div className="bg-light-gray px-3 py-2 rounded-lg rounded-tr-sm">
                  <p>Start Health Check</p>
                </div>
              </div>

              {/* Second DOCCA Message */}
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-md">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <img src={Bot} alt="Bot" />
                  </div>
                  <div>
                    <div className="p-4 rounded-2xl bg-secondary text-white rounded-tl-sm">
                      <p>
                        Great! To give you the best advice, I need some basic
                        information. What's your age and gender?
                      </p>
                    </div>

                    {/* Age & Gender Selection Buttons */}
                    <div className="flex space-x-2 mt-2">
                      <Button variant="outlineGreen" size="sm">
                        18-25, Male
                      </Button>
                      <Button variant="outlineGreen" size="sm">
                        26-35, Female
                      </Button>
                      <Button variant="outlineGreen" size="sm">
                        Other
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Age Response */}
              <div className="flex justify-end">
                <div className="bg-light-gray px-3 py-2 rounded-lg rounded-tr-sm">
                  <p>26-35, Male</p>
                </div>
              </div>

              {/* Third DOCCA Message */}
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-md">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <img src={Bot} alt="Bot" />
                  </div>
                  <div className="p-4 rounded-2xl bg-primary text-white rounded-tl-sm">
                    <p>
                      Perfect! Now tell me about your symptoms. You can type or
                      use the voice button to speak in English or Pidgin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider w-full"></div>

            <div className="container">
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

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#22C55E] mb-3">
                  Recommended Doctors Near You
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/african-doctor-profile.jpg"
                      alt="Dr. Adebayo Ogundimu"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#3B82F6] text-sm">
                        Dr. Adebayo Ogundimu
                      </h4>
                      <p className="text-xs text-gray-600">
                        General Practitioner • 2.5km away
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-1 px-3 py-1.5 bg-[#22C55E] text-white rounded-lg text-xs hover:bg-green-600 transition-colors">
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1.5 bg-[#3B82F6] text-white rounded-lg text-xs hover:bg-blue-600 transition-colors">
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>

          {/* Input Area */}
          <div className=" container flex items-center py-4 space-x-2 inset-shadow-sm/10 ">
            <VoiceInput placeholder="Type your message or symptoms..." />

            <Button variant="primary" size="lg">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default CheckSymptoms;
