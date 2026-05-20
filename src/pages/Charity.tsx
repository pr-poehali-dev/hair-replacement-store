import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const initiatives = [
  {
    icon: "Heart",
    title: "Волосы для детей",
    desc: "Мы передаём часть натуральных волос благотворительным организациям, помогающим детям с онкологическими заболеваниями изготавливать парики.",
    stat: "200+",
    statLabel: "детей получили парики",
  },
  {
    icon: "Users",
    title: "Поддержка женщин",
    desc: "Программа помощи женщинам, перенёсшим лечение и потерявшим волосы. Мы дарим сертификаты на трессы партнёрам программы.",
    stat: "80+",
    statLabel: "женщин поддержано",
  },
  {
    icon: "Leaf",
    title: "Экологичное производство",
    desc: "Упаковка из переработанных материалов, минимальный углеродный след, отказ от химии при обработке волос.",
    stat: "100%",
    statLabel: "переработанная упаковка",
  },
];

const Charity = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 border-b border-border/30 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&h=700&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-4">Делаем мир лучше</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6 max-w-2xl">
            Красота, которая <span className="text-gradient-gold">помогает</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md mt-6">
            Каждая покупка в LUMIÈRE — это не только роскошь для вас, но и вклад в жизнь тех, кто нуждается в поддержке.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-4">Наша миссия</p>
            <h2 className="font-display text-4xl mb-6">Красота должна быть доступной для всех</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Мы верим, что внешность влияет на уверенность и качество жизни. Поэтому LUMIÈRE направляет часть прибыли на поддержку людей, которые из-за болезни или жизненных обстоятельств не могут позволить себе натуральные волосы.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              С 2021 года мы сотрудничаем с онкологическими центрами и благотворительными фондами Москвы и Санкт-Петербурга. Каждый квартал мы публикуем отчёт о нашей деятельности.
            </p>
            <div className="flex items-center gap-3 p-5 border border-gold/20 bg-gold/5">
              <Icon name="Info" size={18} className="text-gold shrink-0" />
              <p className="text-xs text-muted-foreground">
                <span className="text-foreground">5% от каждой продажи</span> направляется в благотворительный фонд «Волосы жизни»
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=600&fit=crop"
                alt="Благотворительность"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-gold/30" />
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-card/20 border-y border-border/30 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-3">Наши инициативы</p>
            <h2 className="font-display text-4xl md:text-5xl">Что мы делаем</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <div key={item.title} className="luxury-card p-8 text-center group">
                <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:border-gold transition-colors">
                  <Icon name={item.icon} size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                <div className="border-t border-border/30 pt-5">
                  <p className="font-display text-3xl text-gradient-gold">{item.stat}</p>
                  <p className="text-xs text-muted-foreground tracking-wider mt-1">{item.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to help */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-14">
          <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-3">Присоединяйтесь</p>
          <h2 className="font-display text-4xl md:text-5xl">Как вы можете помочь</h2>
          <div className="section-divider mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { title: "Пожертвовать волосы", desc: "Если вы стрижёте длинные волосы, вы можете передать их нам для изготовления парика. Длина от 25 см.", action: "Узнать подробнее" },
            { title: "Поддержать финансово", desc: "Вы можете сделать пожертвование напрямую в фонд «Волосы жизни» через наш сайт.", action: "Пожертвовать" },
          ].map((item) => (
            <div key={item.title} className="p-8 border border-border/40 hover:border-gold/30 transition-colors">
              <h3 className="font-display text-2xl mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{item.desc}</p>
              <Link to="/contacts" className="btn-outline-gold text-xs py-2.5 px-5">
                {item.action}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Charity;
