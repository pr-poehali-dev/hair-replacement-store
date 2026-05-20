const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 border-b border-border/30 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560066984-138daaa8bb98?w=1600&h=700&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-4">О компании</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            История <span className="text-gradient-gold">LUMIÈRE</span>
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-4">Наша история</p>
            <h2 className="font-display text-4xl mb-6">Рождённые из страсти к совершенству</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              LUMIÈRE Hair Boutique основан в 2019 году с единственной целью — дарить женщинам уверенность через совершенные волосы. Мы верим, что красота — это не просто внешность, это ощущение, которое начинается изнутри.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Наши волосы — это результат тщательного отбора лучших поставщиков по всему миру. Каждая прядь проходит многоступенчатый контроль качества, чтобы вы получили именно то, о чём мечтаете.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Сегодня LUMIÈRE — это сплочённая команда профессионалов, которая помогла более 500 клиентам обрести новый образ и уверенность в себе.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop"
                alt="О нас"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 border border-gold/30" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-gold/20" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card/20 border-y border-border/30 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-3">Принципы</p>
            <h2 className="font-display text-4xl md:text-5xl">Наши ценности</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Качество без компромиссов",
                text: "Мы поставляем только 100% натуральные волосы, собранные этично и обработанные по высшим стандартам.",
              },
              {
                number: "02",
                title: "Индивидуальный подход",
                text: "Каждая клиентка уникальна. Мы подбираем волосы с учётом ваших особенностей, желаний и образа жизни.",
              },
              {
                number: "03",
                title: "Ответственность",
                text: "Мы поддерживаем этичные цепочки поставок и часть прибыли направляем на социальные проекты.",
              },
            ].map((v) => (
              <div key={v.number} className="p-8 border border-border/40 hover:border-gold/30 transition-colors">
                <p className="font-display text-5xl text-gold/20 mb-4">{v.number}</p>
                <h3 className="font-display text-2xl mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-14">
          <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-3">Команда</p>
          <h2 className="font-display text-4xl md:text-5xl">Люди за брендом</h2>
          <div className="section-divider mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Алина Воронова",
              role: "Основатель & арт-директор",
              image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop",
            },
            {
              name: "Екатерина Смирнова",
              role: "Специалист по подбору волос",
              image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=500&fit=crop",
            },
            {
              name: "Мария Козлова",
              role: "Стилист-консультант",
              image: "https://images.unsplash.com/photo-1514267698597-f62a39f9fb10?w=400&h=500&fit=crop",
            },
          ].map((member) => (
            <div key={member.name} className="group">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <h3 className="font-display text-xl">{member.name}</h3>
              <p className="text-xs text-gold tracking-wider mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
