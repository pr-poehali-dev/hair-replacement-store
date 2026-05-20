import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-display text-2xl tracking-widest text-gradient-gold">
                LUMIÈRE
              </span>
              <p className="text-[0.55rem] tracking-[0.35em] text-muted-foreground uppercase mt-1">
                Hair Boutique
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mt-4">
              Премиальные волосы ручной работы для тех, кто ценит исключительное качество и элегантность в каждой детали.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 border border-border/60 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all"
              >
                <Icon name="Instagram" size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-border/60 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all"
              >
                <Icon name="Send" size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-border/60 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all"
              >
                <Icon name="Youtube" size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-5">
              Навигация
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Каталог", path: "/catalog" },
                { label: "Услуги", path: "/services" },
                { label: "О нас", path: "/about" },
                { label: "Благотворительность", path: "/charity" },
                { label: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-5">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="Phone" size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">+7 (999) 000-00-00</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Mail" size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">info@lumiere.ru</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Москва, ул. Тверская, 1</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Clock" size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Пн–Сб: 10:00 – 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 tracking-wider">
            © 2024 LUMIÈRE Hair Boutique. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground/60 hover:text-gold transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs text-muted-foreground/60 hover:text-gold transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
