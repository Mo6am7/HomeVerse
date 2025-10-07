import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { slidersettings } from "../../utils/cammon";
import data from "../../utils/slider.json";
import "./Residencies.css";
const Residencies: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="r-wapper">
      <div className="e-container">
        <div className="r-head flexColStart">
          <div className="r-topbu">
            <div className="flexColStart text">
              <span className="orangeText">Best Choices</span>
              <span className="primaryText">Popular Residencies</span>
            </div>
            <SliderButtons swiperRef={swiperRef} />
          </div>

          <Swiper
            {...slidersettings}
            className="Swiper"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            style={{ display: "flex" }}
          >
            {data.map((card, i) => (
              <SwiperSlide key={i} >
                <div className="flexColStart r-card">
                  <img src={card.image} alt={card.name ?? ""} />
                  <div className="secondaryText r-Data">
                    <div className="secondaryText r-price">
                      <span>$</span>
                      <span>{card.price}</span>
                    </div>
                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText r-detail">
                      {card.detail}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

interface SliderButtonsProps {
  swiperRef: React.RefObject<SwiperType | null>;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({ swiperRef }) => {
  return (
    <div className="r-buttons flexCenter">
      <button
        className="flexCenter"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &lt;
      </button>
      <button
        className="flexCenter"
        onClick={() => swiperRef.current?.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};

export default Residencies;
