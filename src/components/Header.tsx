import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", path: "/" },
  { label: "Каталог", path: "/catalog" },
  { label: "Услуги", path: "/services" },
  { label: "О нас", path: "/about" },
  { label: "Благотворительность", path: "/charity" },
  { label: "FAQ", path: "/faq" },
  { label: "Контакты", path: "/contacts" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex flex-col items-start group">
              <span className="font-display text-xl tracking-widest text-gradient-gold leading-none">
                LUMIÈRE
              </span>
              <span className="text-[0.55rem] tracking-[0.35em] text-muted-foreground uppercase mt-0.5">
                Hair Boutique
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? "!text-gold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden lg:flex btn-outline-gold text-xs py-2.5 px-5">
                Консультация
              </button>
              <button
                className="lg:hidden text-muted-foreground hover:text-gold transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon name={menuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center">
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="mb-6 text-center">
              <span className="font-display text-2xl tracking-widest text-gradient-gold">
                LUMIÈRE
              </span>
              <p className="text-[0.55rem] tracking-[0.35em] text-muted-foreground uppercase mt-1">
                Hair Boutique
              </p>
            </div>
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-2xl tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-foreground/70 hover:text-gold"
                }`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-gold mt-6">Консультация</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
