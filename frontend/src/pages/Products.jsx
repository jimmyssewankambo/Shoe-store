import { useSearchParams } from "react-router-dom";
import chillImage from "./ShoePhotos/Chill.jpg";
import "./Products.css";
function Products() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";

  const products = [
    {
      id: 1,
      name: "Air Flex Runner",
      category: "men",
      price: 100000,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Urban Court Low",
      category: "men",
      price: 150000,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Luxe Street Lift",
      category: "women",
      price: 150000,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Cloud Motion",
      category: "women",
      price: 125000,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      name: "Mini Sprint",
      category: "kids",
      price: 75000,
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      name: "Play Zone Max",
      category: "kids",
      price: 70000,
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 7,
      name: "Velocity Sale Edition",
      category: "sale",
      price: 90000,
      oldPrice: 145000,
      image:
        "https://images.unsplash.com/photo-1608256246200-53e8b47b2f80?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 8,
      name: "Classic Street Deal",
      category: "sale",
      price: 50000,
      oldPrice: 100000,
      image:
        "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 9,
      name: "Jimmy Choo",
      category: "men",
      price: 75000,
      image: chillImage,
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const headingMap = {
    men: "Men's Collection",
    women: "Women's Collection",
    kids: "Kids' Collection",
    sale: "Sale Collection",
    all: "All Products",
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = chillImage;
  };

  const formatPrice = (price) => `UGX ${price.toLocaleString("en-US")}`;

  return (
    <section className="products-page">
      <div className="products-hero">
        <p className="products-label">Treasures</p>
        <h1>{headingMap[selectedCategory] || "Products"}</h1>
        <p className="products-count">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={handleImageError}
              />
              {product.oldPrice && <span className="product-badge">Sale</span>}
            </div>

            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>

              <div className="product-price-row">
                <span className="product-price">{formatPrice(product.price)}</span>
                {product.oldPrice && (
                  <span className="product-old-price">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
              </div>

              <button type="button" className="product-btn">
                View Product
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
