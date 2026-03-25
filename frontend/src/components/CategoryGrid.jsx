import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CategoryGrid.css";

function CategoryGrid() {
  const categories = [
    {
      title: "Men",
      subtitle: "New Arrivals",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRB8fMQ3wtO4ELrQLw6YGpueBRo1mlxFv6pIebjJNKbaPkZ3WWenkZPDqWPkierOu1E6zfXneJXkvV4yQqbUWO8gSPdP8d6Cg",
      link: "/products?category=men",
    },
    {
      title: "Women",
      subtitle: "Spring Edit",
      image:
        "https://assets.christiandior.com/is/image/diorprod/KCT259VVVS900_SBG_E02?$r9x10_raw$&crop=0,0,4000,5000&wid=1024&hei=1107&scale=0.5535&bfc=on&qlt=85",
      link: "/products?category=women",
    },
    {
      title: "Kids",
      subtitle: "Playground Styles",
      image:
        "https://www.chaussurespop.com/cdn/shop/files/skechers_mega-craft_4k_orange_891516-308_04_1080x.jpg?v=1770127575",
      link: "/products?category=kids",
    },
    {
      title: "Sale",
      subtitle: "Up to 50% Off",
      image:
        "https://img.freepik.com/free-photo/paper-style-black-friday-arrangement_23-2149074036.jpg",
      link: "/products?category=sale",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".category-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        root: null,
        threshold: 0.55,
        rootMargin: "-25% 0px -25% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="category-section">
      <div className="category-grid">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            to={cat.link}
            className="category-card fade-in"
            style={{ backgroundImage: `url("${cat.image}")` }}
          >
            <div className="glass-overlay"></div>

            <div className="card-content">
              <h2>{cat.title}</h2>
              <p className="category-sub">{cat.subtitle}</p>
              <span className="glass-btn">Shop Now</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
