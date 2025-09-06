import { Phone } from "lucide-react";
import DrAO from "../../../assets/images/Dr. A.O.png";
import WhatsAppIcon from "../../../assets/images/WhatsApp.svg";
import Button from "../../ui/Button";

const RecommendedDoctors = () => {
  return (
    <>
      <div className="px-4 sm:px-8 py-4">
        <h2 className="mb-3">Recommended Doctors Near You</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-start">
            <div className="flex items-start space-x-3">
              <img
                src={DrAO}
                alt="Dr. Adebayo Ogundimu"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex-1">
                  <h4 className=" text-primary">Dr. Adebayo Ogundimu</h4>
                  <p>General Practitioner • 2.5km away</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="secondary" size="sm">
                    <img
                      src={WhatsAppIcon}
                      className="mr-2"
                      width={12}
                      height={12}
                    />
                    <span>WhatsApp</span>
                  </Button>
                  <Button variant="primary" size="sm">
                    <Phone className="mr-2 w-3 h-3" />
                    <span>Call</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedDoctors;
