"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mic, Send, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Bot from "../../assets/images/Bot.svg";
import Leaf from "../../assets/images/leaf.svg";
import DrAO from "../../assets/images/Dr. A.O.png";
import WhatsAppIcon from "../../assets/images/WhatsApp.svg";
import Button from "../ui/Button";
import { VoiceInput } from "../ui/Input";
import { SelfCareCard } from "../ui/Cards";
import SelfCare from "./selfCafe/SelfCare";
import RecommendedDoctors from "./selfCafe/RecommendedDoctors";

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
        <div className="rounded-2xl shadow-2xl mx-auto flex flex-col h-[80vh] mb-1 ">
          <div className="container flex items-center justify-between py-2 border-b border-light-gray shadow-b shadow-lg w-full">
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

          {/* Chat Messages */}
          <div className="flex-1 py-4 overflow-y-auto space-y-4 scrollbar-hide">
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
              <div className="flex justify-end py-6">
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
              <div className="flex justify-end py-6">
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
              {/* Self-Care Recommendations */}
              <SelfCare />

              {/* Recommended Doctors */}
              <RecommendedDoctors />
            </div>
            {/* <div className="divider"></div> */}
          </div>

          {/* Input Area */}
          <div className="container flex items-center py-4 space-x-2 inset-shadow-sm/10">
            <VoiceInput placeholder="Type your message or symptoms..." />

            <Button variant="primary" size="lg">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CheckSymptoms;
