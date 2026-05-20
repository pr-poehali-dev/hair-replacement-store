import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Sparkles",
    title: "Подбор волос",
    desc: "Персональная консультация со специалистом: подберём цвет, текстуру и длину под ваш образ, тип лица и образ жизни.",
    price: "Бесплатно",
    duration: "60 минут",
  },
  {
    icon: "Scissors",
    title: "Наращивание волос",
    desc: "Профессиональное наращивание капсульным, лентовым или микрокапсульным методом. Работаем только с натуральными волосами.",
    price: "от 15 000 ₽",
    duration: "2–4 часа",
  },
  {
    icon: "Palette",
    title: "Колорирование",
    desc: "Окрашивание нарощенных волос в тон вашим натуральным волосам или создание уникального омбре-эффекта.",
    price: "от 8 000 ₽",
    duration: "2–3 часа",
  },
  {
    icon: "RefreshCw",
    title: "Коррекция наращивания",
    desc: "Плановый уход и коррекция нарощенных волос каждые 3–4 месяца. Снятие, чистка капсул и повторное наращивание.",
    price: "от 10 000 ₽",
    duration: "3–4 часа",
  },
  {
    icon: "Heart",
    title: "Уход за нарощенными волосами",
    desc: "Профессиональные процедуры по восстановлению и питанию нарощенных волос: кератинирование, ламинирование, маски.",
    price: "от 5 000 ₽",
    duration: "1–2 часа",
  },
  {
    icon: "Package",
    title: "Изготовление на заказ",
    desc: "Создадим трессы или капсулы точно под ваши параметры: нужный цвет, длину и текстуру — индивидуальный заказ.",
    price: "от 25 000 ₽",
    duration: "7–14 дней",
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 border-b border-border/30 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1600&h=700&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-4">Что мы предлагаем</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">Наши услуги</h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="luxury-card p-8 group">
              <Icon
                name={s.icon}
                size={32}
                className="text-gold mb-5 group-hover:scale-110 transition-transform"
              />
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="border-t border-border/30 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider mb-0.5">Стоимость</p>
                  <p className="text-gold text-sm font-medium">{s.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground tracking-wider mb-0.5">Время</p>
                  <p className="text-sm text-foreground">{s.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-card/20 border-y border-border/30 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-3">Как это работает</p>
            <h2 className="font-display text-4xl md:text-5xl">Процесс работы</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Консультация", text: "Обсуждаем ваши пожелания, подбираем подходящие волосы и метод наращивания." },
              { step: "02", title: "Подбор", text: "Выбираем цвет, текстуру и длину. При необходимости — оформляем индивидуальный заказ." },
              { step: "03", title: "Процедура", text: "Наш мастер проводит наращивание в комфортной атмосфере нашего бутика." },
              { step: "04", title: "Результат", text: "Вы уходите с роскошными волосами и инструкцией по уходу от нашего специалиста." },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <p className="font-display text-6xl text-gold/15 mb-3">{item.step}</p>
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          Готовы преобразиться?
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-10">
          Запишитесь на бесплатную консультацию прямо сейчас
        </p>
        <Link to="/contacts" className="btn-gold">
          Записаться
        </Link>
      </section>
    </div>
  );
};

export default Services;
