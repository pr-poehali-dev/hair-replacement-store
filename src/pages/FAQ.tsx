import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    category: "О волосах",
    items: [
      {
        q: "Все ли волосы у вас натуральные?",
        a: "Да, 100%. Мы работаем исключительно с натуральными волосами, прошедшими многоступенчатый контроль качества. Мы не продаём синтетические или смешанные волосы.",
      },
      {
        q: "Откуда поставляются волосы?",
        a: "Наши волосы поставляются от сертифицированных поставщиков из России, Восточной Европы и Азии. Все поставщики работают по этическим стандартам — донорство волос является добровольным и оплачиваемым.",
      },
      {
        q: "Как долго прослужат нарощенные волосы?",
        a: "При правильном уходе капсульные волосы служат 3–6 месяцев до плановой коррекции. Трессы при ленточном методе — 2–3 месяца. После коррекции волосы можно использовать повторно.",
      },
      {
        q: "Можно ли красить нарощенные волосы?",
        a: "Да, натуральные волосы можно красить. Однако мы рекомендуем делать это у специалиста, знакомого с нарощенными волосами. Отбеливание может снизить качество волос.",
      },
    ],
  },
  {
    category: "Заказ и доставка",
    items: [
      {
        q: "Как сделать заказ?",
        a: "Вы можете выбрать товар в каталоге на сайте, позвонить нам или написать в Telegram. Для индивидуального подбора рекомендуем записаться на бесплатную консультацию.",
      },
      {
        q: "Сколько времени занимает доставка?",
        a: "Курьером по Москве — в тот же день при заказе до 14:00. По России — 2–7 рабочих дней в зависимости от региона. Доставка осуществляется через СДЭК и Почту России.",
      },
      {
        q: "Можно ли вернуть товар?",
        a: "Из соображений гигиены возврат волос невозможен. Однако если товар не соответствует описанию или имеет производственный дефект — мы бесплатно заменим его.",
      },
    ],
  },
  {
    category: "Уход",
    items: [
      {
        q: "Как ухаживать за нарощенными волосами?",
        a: "Используйте мягкие шампуни без сульфатов, расчёсывайте от кончиков к корням. Избегайте высоких температур у зоны крепления. При мытье не трите энергично — промокайте волосы полотенцем.",
      },
      {
        q: "Какие средства можно использовать?",
        a: "Рекомендуем профессиональные серии для нарощенных волос: Wella, Joico, Matrix. Избегайте средств с маслами у зоны крепления — они могут ослабить фиксацию капсул.",
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-28 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-4">Вопросы и ответы</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">FAQ</h1>
          <div className="section-divider" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
        {faqs.map((cat) => (
          <div key={cat.category} className="mb-14">
            <h2 className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-6">
              {cat.category}
            </h2>
            <div className="space-y-0 border-t border-border/30">
              {cat.items.map((item, i) => {
                const key = `${cat.category}-${i}`;
                const isOpen = openIndex === key;
                return (
                  <div key={i} className="border-b border-border/30">
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span
                        className={`font-display text-lg transition-colors ${
                          isOpen ? "text-gold" : "text-foreground group-hover:text-gold/80"
                        }`}
                      >
                        {item.q}
                      </span>
                      <Icon
                        name={isOpen ? "Minus" : "Plus"}
                        size={16}
                        className={`shrink-0 ml-4 transition-colors ${
                          isOpen ? "text-gold" : "text-muted-foreground group-hover:text-gold"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-6 -mt-2">
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-12 p-8 border border-gold/20 text-center">
          <p className="font-display text-2xl mb-3">Не нашли ответ?</p>
          <p className="text-sm text-muted-foreground mb-6">
            Свяжитесь с нами — мы ответим на любой вопрос
          </p>
          <a href="/contacts" className="btn-outline-gold">
            Написать нам
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
