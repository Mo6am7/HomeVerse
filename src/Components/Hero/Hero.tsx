import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CountUP from "react-CountUP";
const Hero = () => {
  return (
    <section className="hero-wapper">
      <div className="flexCenter innerWidth paddings  hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-cicle" />
            <h1>
              Discover <br />
              Most Suitable property
            </h1>
          </div>
          <div className="flexColStart  hero-des">
            <span className="secondaryText">
              find a variety of properties that suit you very easilty
            </span>{" "}
            <span className="secondaryText">
              forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter search-ber">
            <HiLocationMarker className="HiLocationMarker" size={25} />
            <div className="group">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="search-icon"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                </g>
              </svg>

              <input
                id="query"
                className="input"
                type="search"
                placeholder="Search..."
                name="searchbar"
              />
            </div>
            <button className="boton-elegante">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ fontSize: "24px", color: "#333" }}
              ></i>
            </button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUP start={8800} end={9000} duration={4} />
                <p>+</p>
                <p className="secondaryText">Premium Products</p>
              </span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUP start={1950} end={2000} duration={4} />
                <p>+</p>
                <p className="secondaryText">Hoppy Customers</p>
              </span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUP end={28} duration={4} />
                <p>+</p>
                <p className="secondaryText">Award Winning</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
