import { useState } from "react";
import Icon from "@/components/ui/icon";

const allProducts = [
  { id: 1, name: "Шоколадные прямые", type: "Трессы", length: "40 см", color: "Шоколадный", texture: "Прямые", price: 22900, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop" },
  { id: 2, name: "Омбре карамель волнистые", type: "Трессы", length: "50 см", color: "Карамельный", texture: "Волнистые", price: 32500, image: "https://images.unsplash.com/photo-1560066984-138daaa8bb98?w=400&h=500&fit=crop" },
  { id: 3, name: "Эбеновые прямые длинные", type: "Трессы", length: "70 см", color: "Чёрный", texture: "Прямые", price: 35000, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop" },
  { id: 4, name: "Блонд волнистые", type: "Кератиновые капсулы", length: "50 см", color: "Блонд", texture: "Волнистые", price: 29900, image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=500&fit=crop" },
  { id: 5, name: "Каштановые кудри", type: "Трессы", length: "40 см", color: "Каштановый", texture: "Кудрявые", price: 27500, image: "https://images.unsplash.com/photo-1514267698597-f62a39f9fb10?w=400&h=500&fit=crop" },
  { id: 6, name: "Русые прямые", type: "Кератиновые капсулы", length: "60 см", color: "Русый", texture: "Прямые", price: 31000, image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop" },
  { id: 7, name: "Чёрные кудрявые", type: "Микрокапсулы", length: "40 см", color: "Чёрный", texture: "Кудрявые", price: 24900, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=500&fit=crop" },
  { id: 8, name: "Медовый омбре прямые", type: "Трессы", length: "60 см", color: "Карамельный", texture: "Прямые", price: 34500, image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop" },
  { id: 9, name: "Платиновый блонд прямые", type: "Кератиновые капсулы", length: "50 см", color: "Блонд", texture: "Прямые", price: 38000, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=700&fit=crop" },
];

const types = ["Все", "Трессы", "Кератиновые капсулы", "Микрокапсулы"];
const colors = ["Все", "Шоколадный", "Карамельный", "Чёрный", "Блонд", "Каштановый", "Русый"];
const textures = ["Все", "Прямые", "Волнистые", "Кудрявые"];
const lengths = ["Все", "40 см", "50 см", "60 см", "70 см"];

const Catalog = () => {
  const [filterType, setFilterType] = useState("Все");
  const [filterColor, setFilterColor] = useState("Все");
  const [filterTexture, setFilterTexture] = useState("Все");
  const [filterLength, setFilterLength] = useState("Все");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = allProducts.filter((p) => {
    if (filterType !== "Все" && p.type !== filterType) return false;
    if (filterColor !== "Все" && p.color !== filterColor) return false;
    if (filterTexture !== "Все" && p.texture !== filterTexture) return false;
    if (filterLength !== "Все" && p.length !== filterLength) return false;
    return true;
  });

  const activeFilters = [filterType, filterColor, filterTexture, filterLength].filter(
    (f) => f !== "Все"
  ).length;

  const resetAll = () => {
    setFilterType("Все");
    setFilterColor("Все");
    setFilterTexture("Все");
    setFilterLength("Все");
  };

  const FilterSelect = ({
    label,
    options,
    value,
    onChange,
  }: {
    label: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div>
      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-3 py-1.5 text-xs border transition-all ${
              value === opt
                ? "border-gold text-gold bg-gold/5"
                : "border-border/40 text-muted-foreground hover:border-gold/40 hover:text-foreground/80"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      {/* Page Header */}
      <div className="mb-12">
        <p className="text-[0.6rem] tracking-[0.4em] text-gold uppercase mb-3">Наша коллекция</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">Каталог волос</h1>
        <div className="section-divider" />
      </div>

      {/* Filters toggle (mobile) */}
      <button
        className="lg:hidden flex items-center gap-2 mb-6 text-sm text-muted-foreground border border-border/40 px-4 py-2.5 hover:border-gold/40 transition-colors"
        onClick={() => setFiltersOpen(!filtersOpen)}
      >
        <Icon name="SlidersHorizontal" size={15} />
        Фильтры
        {activeFilters > 0 && (
          <span className="ml-1 w-5 h-5 rounded-full bg-gold text-obsidian text-[0.6rem] flex items-center justify-center font-medium">
            {activeFilters}
          </span>
        )}
      </button>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside
          className={`lg:w-64 shrink-0 ${
            filtersOpen ? "block" : "hidden lg:block"
          }`}
        >
          <div className="sticky top-28 space-y-7">
            <div className="flex items-center justify-between">
              <h3 className="text-[0.65rem] tracking-[0.25em] uppercase text-foreground font-medium">
                Фильтры
              </h3>
              {activeFilters > 0 && (
                <button
                  onClick={resetAll}
                  className="text-[0.6rem] tracking-wider text-gold hover:text-gold/70 transition-colors uppercase"
                >
                  Сбросить
                </button>
              )}
            </div>
            <FilterSelect label="Тип" options={types} value={filterType} onChange={setFilterType} />
            <FilterSelect label="Цвет" options={colors} value={filterColor} onChange={setFilterColor} />
            <FilterSelect label="Текстура" options={textures} value={filterTexture} onChange={setFilterTexture} />
            <FilterSelect label="Длина" options={lengths} value={filterLength} onChange={setFilterLength} />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              Найдено: <span className="text-foreground">{filtered.length}</span> позиций
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <Icon name="Search" size={36} className="text-border mx-auto mb-4" />
              <p className="text-muted-foreground">По вашим фильтрам ничего не найдено</p>
              <button onClick={resetAll} className="btn-outline-gold mt-6 text-xs">
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="luxury-card group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[0.55rem] tracking-widest bg-background/80 text-gold px-2 py-1 uppercase">
                        {product.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[0.55rem] tracking-wider text-muted-foreground uppercase">
                        {product.length} · {product.texture}
                      </span>
                    </div>
                    <h3 className="font-display text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gold text-sm font-medium">
                        {product.price.toLocaleString("ru-RU")} ₽
                      </p>
                      <button className="text-[0.6rem] tracking-wider border border-border/40 hover:border-gold hover:text-gold text-muted-foreground px-3 py-1.5 transition-all uppercase">
                        В корзину
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
