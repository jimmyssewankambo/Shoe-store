import { Link } from "react-router-dom";
import "./HeroVideo.css";

function HeroVideo() {
  return (
    <section className="hero-container">
      <video
        className="hero-video"
        src="/videos/vidd.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Treasures Shoe World</h1>
        <p>Step Into Style</p>

        <Link to="/products" className="hero-button">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default HeroVideo;
