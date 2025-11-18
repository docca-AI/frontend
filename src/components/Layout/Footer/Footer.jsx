import Logo from "@/assets/images/Logo.png";
import WhatsApp from "@/assets/images/WhatsApp.svg";
import {
  Mail,
  X,
  Phone,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ShieldAlert,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { APP_CONTENT } from "@/language/content";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-neutral-dark text-light-gray py-4 sm:py-8 text-center flex justify-center sm:px-8">
      <div className="px-4 sm:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          <div>
            <a href="/" className="flex justify-center items-center">
              <div className="bg-gradient-accent p-3 rounded-md mr-2">
                <img src={Logo} className="h-4 w-4" alt="DOCCA Logo" />
              </div>
              <span className="text-2xl font-extrabold">DOCCA</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              {APP_CONTENT.FOOTER_ABOUT[language]}
            </p>
          </div>
          <div>
            <h4 className="mb-2 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 sm:mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/health-tips" className="hover:text-white">
                  Health Tips
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 sm:mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-center items-center space-x-2">
                <a
                  href="mailto:support@docca.com.ng"
                  className="flex items-center space-x-2 "
                >
                  <Mail size={16} />
                  <span>support@docca.com.ng</span>
                </a>
              </li>
              <li className="flex justify-center items-center space-x-2">
                <a
                  href="https://wa.me/23480036222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 "
                >
                  <img src={WhatsApp} size={16} />
                  <span>+234 800 DOCCA</span>
                </a>
              </li>
              <h4 className="text-white">Follow Us</h4>
              <li className="flex items-center justify-center text-primary space-x-4 pt-2">
                <a href="#" className="hover:scale-105">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:scale-105">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:scale-105">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:scale-105">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:scale-105">
                  <Youtube size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 text-center text-sm">
          <p>&copy; 2025 DOCCA. All rights reserved.</p>
          <div className="bg-warning/10 mt-4 inline-block px-2 py-2 rounded-md">
            <div className="flex flex-col sm:flex-row items-center justify-center space-x-2 text-warning">
              <ShieldAlert size={16} />
              <p className="text-xs">
                {APP_CONTENT.FOOTER_DISCLAIMER[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
