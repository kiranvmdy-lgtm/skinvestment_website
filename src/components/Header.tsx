import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import LanguageSelector from "./LanguageSelector";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Why Us",
    href: "/why-us"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "Contact",
    href: "/contact"
  }, {
    name: "News",
    href: "/news"
  }, {
    name: "Media",
    href: "/media"
  }];

  const handleClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
    <div className="container mx-auto">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={handleClick}>
          <img src={logo} alt="SK Investment Consultants" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navLinks.map(link => (
            <Link key={link.name} to={link.href} onClick={handleClick} className="px-2.5 py-2 text-[15px] font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted whitespace-nowrap">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-3">
          <LanguageSelector />
          <a href="tel:+916364825402" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+916364825402</span>
          </a>
          <Link to="/contact" onClick={handleClick}>
            <Button size="sm">
              Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="xl:hidden py-4 border-t border-border animate-fade-in">
        <nav className="flex flex-col gap-1">
          {navLinks.map(link => (
            <Link key={link.name} to={link.href} onClick={handleClick} className="px-4 py-3 text-left text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3 px-4">
          <LanguageSelector />
          <a href="tel:+916364825402" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <span>+916364825402</span>
          </a>
          <Link to="/contact" onClick={handleClick}>
            <Button className="w-full">
              Free Consultation
            </Button>
          </Link>
        </div>
      </div>}
    </div>
  </header>;
};
export default Header;

