import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
    >
      <div>
        <img alt="" loading="lazy" src="/images/slider-1.jpg" />
      </div>
      <div>
        <img alt="" loading="lazy" src="/images/slider-2.jpg" />
      </div>
      <div>
        <img alt="" loading="lazy" src="/images/slider-3.jpg" />
      </div>
      <div>
        <img alt="" loading="lazy" src="/images/slider-4.jpeg" />
      </div>
    </Carousel>
  );
}

export default Slider;
