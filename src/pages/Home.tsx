import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const featuredProducts = [
  {
    id: 1,
    name: "Волосы натуральные — Шоколад",
    type: "Трессы",
    length: "60 см",
    color: "Шоколадный",
    texture: "Прямые",
    price: "28 900 ₽",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Волосы Омбре — Карамель",
    type: "Трессы",
    length: "50 см",
    color: "Карамельный",
    texture: "Волнистые",
    price: "32 500 ₽",
    image: "https://images.unsplash.com/photo-1560066984-138daaa8bb98?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Волосы тёмные — Эбеновые",
    type: "Трессы",
    length: "70 см",
    color: "Чёрный",
    texture: "Прямые",
    price: "35 000 ₽",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&h=900&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-xl">
            <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-6 opacity-0-init animate-fade-in">
              Премиальные волосы
            </p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none mb-6 opacity-0-init animate-fade-in delay-100">
              Истинная<br />
              <span className="text-gradient-gold">красота</span><br />
              в каждой нити
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm opacity-0-init animate-fade-in delay-200">
              Натуральные волосы высшего качества. Каждая прядь — произведение искусства, созданное для тех, кто ценит совершенство.
            </p>
            <div className="flex items-center gap-4 opacity-0-init animate-fade-in delay-300">
              <Link to="/catalog" className="btn-gold">
                Смотреть каталог
              </Link>
              <Link to="/about" className="btn-outline-gold">
                О нас
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
          <span className="text-[0.55rem] tracking-[0.3em] text-muted-foreground uppercase">Прокрутите</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/30 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Довольных клиентов" },
              { value: "100%", label: "Натуральные волосы" },
              { value: "15+", label: "Оттенков и текстур" },
              { value: "5 лет", label: "На рынке красоты" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-gradient-gold">{stat.value}</p>
                <p className="text-xs text-muted-foreground tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-14">
          <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-3">Коллекция</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Избранные позиции</h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="luxury-card group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link to="/catalog" className="btn-gold w-full text-center text-xs">
                    Подробнее
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[0.55rem] tracking-widest text-muted-foreground uppercase">
                    {product.type} · {product.length}
                  </span>
                </div>
                <h3 className="font-display text-xl mb-1">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {product.texture} · {product.color}
                </p>
                <p className="text-gold font-body text-sm font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/catalog" className="btn-outline-gold">
            Весь каталог
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-card/20 border-y border-border/30 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-3">Преимущества</p>
            <h2 className="font-display text-4xl md:text-5xl">Почему выбирают нас</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Gem",
                title: "Эксклюзивное качество",
                desc: "Только 100% натуральные волосы, прошедшие строгий контроль качества.",
              },
              {
                icon: "Leaf",
                title: "Этичное производство",
                desc: "Мы работаем только с сертифицированными поставщиками, соблюдающими этические стандарты.",
              },
              {
                icon: "Palette",
                title: "Широкий выбор",
                desc: "Более 15 оттенков, 4 текстуры и различная длина — найдите идеальный вариант для себя.",
              },
              {
                icon: "HeartHandshake",
                title: "Персональная консультация",
                desc: "Наши эксперты подберут идеальный цвет и текстуру под ваши пожелания.",
              },
              {
                icon: "Award",
                title: "Гарантия",
                desc: "Даём гарантию качества на все изделия и бесплатную замену при дефекте.",
              },
              {
                icon: "Truck",
                title: "Быстрая доставка",
                desc: "Доставка по всей России. Курьером в Москве — в тот же день.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 border border-border/40 hover:border-gold/30 transition-colors group"
              >
                <Icon
                  name={item.icon}
                  size={28}
                  className="text-gold mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-display text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-4">Бесплатно</p>
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          Получите персональную консультацию
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10">
          Наш специалист поможет подобрать идеальные волосы под ваш цвет, длину и текстуру
        </p>
        <Link to="/contacts" className="btn-gold">
          Записаться на консультацию
        </Link>
      </section>
    </div>
  );
};

export default Home;
