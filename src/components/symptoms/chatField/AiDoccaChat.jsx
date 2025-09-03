import React, { useState } from "react";
// import { Mic, FaStethoscope, FaUserMd } from "";
import { X, Mic, Stethoscope, User, Send } from "lucide-react";
import Bot from "../../../assets/images/Bot.svg";
import Button from "../../ui/Button";

const AiDoccaChat = () => {
  const [message, setMessage] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleVoiceInput = () => {
    console.log("Voice input activated");
    // Add voice recognition logic here
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 p-6">
        {/* AI Assistant Header with Buttons */}
        <div className="flex items-center justify-between gap-3 border-b border-gray-200 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-lg bg-primary text-white flex items-center justify-center w-9 h-9">
              <img
                src={Bot}
                alt="Ai checker"
                className="rounded-full w-4 h-4"
              />
            </div>
            <div>
              <h3 className="text-sm font-semi-bold text-primary">
                DOCCA Assistant
              </h3>
              <p className="text-xs">AI Health Checker</p>
            </div>
          </div>
          <div className="p-2 cursor-pointer">
            <X className=" text-gray-500" size={16} />
          </div>
        </div>

        {/* First Message - AI */}
        <div className="flex justify-start gap-2 mb-4">
          <div className="p-1 rounded-full bg-primary text-white flex items-center justify-center w-9 h-9">
            <img
              src={Bot}
              alt="Ai checker"
              className="rounded-full w-4 h-4 flex-shrink-0"
            />
          </div>
          <div className="bg-blue-400 rounded-lg p-4 max-w-md">
            <div className="text-white text-sm">
              Hello! I'm DOCCA, your AI health assistant. I can help you
              understand your symptoms and guide you to the right care.
            </div>
          </div>
        </div>

        {/* Action Buttons - Centered */}
        <div className="flex mx-10 gap-3 mb-15">
          <button className="bg-white border-2 border-blue-400 text-blue-400 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium flex items-center gap-2">
            <Stethoscope className="text-sm" />
            Start Health Check
          </button>
          <button className="bg-white border-2 border-blue-400 text-blue-400 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium flex items-center gap-2">
            <User className="text-sm" />
            Find a Doctor
          </button>
        </div>

        {/* Second Message - AI */}
        <div className="flex justify-start gap-2 mb-4">
          <div className="p-1 rounded-full bg-primary text-white flex items-center justify-center w-9 h-9">
            <img
              src={Bot}
              alt="Ai checker"
              className="rounded-full w-4 h-4 flex-shrink-0"
            />
          </div>
          <div className="bg-green-400 rounded-lg p-4 max-w-md">
            <div className="text-white text-sm">
              Great! To give you the best advice, I need some basic information.
              What's your age and gender?
            </div>
          </div>
        </div>

        {/* Demographic Buttons - Centered */}
        <div className="mx-10 mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">
            Select your details:
          </h4>

          {/* Age Group Buttons - Centered */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs text-gray-600 font-medium w-full">
              Age:
            </span>
            {["18-25", "26-35", "36-45"].map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedAge === age
                    ? "bg-blue-600 text-white"
                    : "border-2 border-green-400 bg-white text-green-500 hover:bg-green-50"
                }`}
              >
                {age}
              </button>
            ))}
          </div>

          {/* Gender Buttons - Centered */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-600 font-medium w-full">
              Gender:
            </span>
            {["Male", "Female", "Other"].map((gender) => (
              <button
                key={gender}
                onClick={() => setSelectedGender(gender)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedGender === gender
                    ? "bg-blue-600 text-white"
                    : "border-2 border-green-400 bg-white text-green-500 hover:bg-green-50"
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        {/* Third Message - AI */}
        <div className="flex justify-start gap-2 mb-4">
          <div className="p-1 rounded-full bg-primary text-white flex items-center justify-center w-9 h-9">
            <img
              src={Bot}
              alt="Ai checker"
              className="rounded-full w-4 h-4 flex-shrink-0"
            />
          </div>
          <div className="bg-blue-400 rounded-lg p-4 max-w-md">
            <div className="text-white text-sm">
              Perfect! Now tell me about your symptoms. You can type or use the
              voice button to speak in English or Pidgin.
            </div>
          </div>
        </div>

        {/* Message Input Field */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message or symptoms..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleVoiceInput}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Mic className="text-lg" />
            </button>
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            // className="px-3 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            variant="primary"
            size="sm"
          >
            <Send size={16} color="white" />
            {/* <img src="idiv4.png" alt="Send" className="w-5 h-5" /> */}
          </Button>
        </div>

        {/* Quick Symptom Buttons - Centered */}
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-2">Quick describe:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Headache", "Fever", "Cough", "Chest pain", "Stomach ache"].map(
              (symptom) => (
                <button
                  key={symptom}
                  onClick={() => setMessage(symptom)}
                  className="px-3 py-1 bg-gray-100 text-green-500 border-2 border-green-200 rounded-lg text-xs hover:bg-green-50 transition-colors"
                >
                  {symptom}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDoccaChat;