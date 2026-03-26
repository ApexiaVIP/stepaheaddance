import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src={logo} alt="Step Ahead Dance School" className="h-16 w-auto mb-4 brightness-200" />
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Teaching dance with pride since day one. Ballet, Tap, Modern, Street & Musical Theatre for all ages.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-primary-foreground/60 font-body text-sm hover:text-primary transition-colors">Home</Link>
              <Link to="/timetable" className="block text-primary-foreground/60 font-body text-sm hover:text-primary transition-colors">Timetable</Link>
              <Link to="/contact" className="block text-primary-foreground/60 font-body text-sm hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <p className="text-primary-foreground/60 font-body text-sm">
                  Sylvia Roberts, Guide Hall, Cross Rd, Heald Green, SK8 3LW
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:07799614260" className="text-primary-foreground/60 font-body text-sm hover:text-primary transition-colors">
                  07799 614 260
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@stepaheaddance.co.uk" className="text-primary-foreground/60 font-body text-sm hover:text-primary transition-colors">
                  info@stepaheaddance.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 font-body text-xs">
            © {new Date().getFullYear()} Step Ahead Dance School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
