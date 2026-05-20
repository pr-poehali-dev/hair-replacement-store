import { useState } from "react";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-28 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-4">Свяжитесь с нами</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">Контакты</h1>
          <div className="section-divider" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-display text-3xl mb-8">Оставьте заявку</h2>
            {sent ? (
              <div className="border border-gold/30 p-10 text-center">
                <Icon name="CheckCircle" size={40} className="text-gold mx-auto mb-4" />
                <h3 className="font-display text-2xl mb-2">Заявка отправлена</h3>
                <p className="text-muted-foreground text-sm">
                  Мы свяжемся с вами в течение 2 часов в рабочее время.
                </p>
                <button
                  className="btn-outline-gold mt-8 text-xs"
                  onClick={() => { setSent(false); setForm({ name: "", phone: "", message: "" }); }}
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-border/40 focus:border-gold outline-none px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 transition-colors"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div>
                  <label className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border border-border/40 focus:border-gold outline-none px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 transition-colors"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                <div>
                  <label className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-border/40 focus:border-gold outline-none px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 transition-colors resize-none"
                    placeholder="Опишите ваш запрос или задайте вопрос"
                  />
                </div>
                <button type="submit" className="btn-gold w-full">
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground/60 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <h2 className="font-display text-3xl mb-8">Как нас найти</h2>
            <div className="space-y-7">
              {[
                { icon: "MapPin", title: "Адрес", text: "Москва, ул. Тверская, д. 1\nМетро Охотный ряд" },
                { icon: "Clock", title: "Часы работы", text: "Понедельник–Суббота: 10:00 – 20:00\nВоскресенье: выходной" },
                { icon: "Phone", title: "Телефон", text: "+7 (999) 000-00-00" },
                { icon: "Mail", title: "Email", text: "info@lumiere.ru" },
                { icon: "Send", title: "Telegram", text: "@lumiere_hair" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-foreground whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-border/40 p-6">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-3">Социальные сети</p>
              <div className="flex items-center gap-4">
                {[
                  { icon: "Instagram", label: "Instagram" },
                  { icon: "Send", label: "Telegram" },
                  { icon: "Youtube", label: "YouTube" },
                ].map((soc) => (
                  <a
                    key={soc.label}
                    href="#"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-gold transition-colors"
                  >
                    <Icon name={soc.icon} size={15} />
                    {soc.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
