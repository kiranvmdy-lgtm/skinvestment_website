import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ExternalLink, Monitor, Music } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Life Insurance",
    "Health Insurance",
    "Group Insurance",
    "Motor Insurance",
    "Travel Insurance",
    "Mutual Funds",
    "Personal Loans",
    "Home Loans",
    "Digital Marketing",
    "Auditing & Taxation",
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Why Choose Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="SK Investment Consultants" className="h-12 w-auto drop-shadow-lg" />
            </div>
            <p className="text-sm text-background/60 mb-6">
              A solution for all investments. Protecting families, growing wealth, and simplifying money for over 19 years.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-background mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-background mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Ventures */}
          <div>
            <h3 className="font-display font-bold text-background mb-4">Our Ventures</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.techmiyaedtech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors"
                >
                  <Monitor className="w-4 h-4 flex-shrink-0" />
                  Artificial Intelligent Education
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.shankaramusic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors"
                >
                  <Music className="w-4 h-4 flex-shrink-0" />
                  Music Education
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-background mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+916364825402" className="flex items-start gap-3 text-sm text-background/60 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+916364825402</span>
                </a>
              </li>
              <li>
                <a href="mailto:shankarakrupainvestment@gmail.com" className="flex items-start gap-3 text-sm text-background/60 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>shankarakrupainvestment@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {currentYear} SK Investment Consultants. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
