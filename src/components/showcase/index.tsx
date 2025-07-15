import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import showimage from "../../assets/showcaseIMage.png";
const Showcase = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0} // Slaydlar orasida bo‘sh joy bo‘lmasin
      slidesPerView={1} // Faqat bitta rasm ekranni egallasin
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Avtomatik o‘tish
      navigation // Oldinga-orqaga tugmalar
      pagination={{ clickable: true, dynamicBullets: true }} // Pastdagi pagination
    >
      <SwiperSlide>
        <img className="w-full object-cover" src={showimage} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover"
          src="https://kinoplan.io/uploads/banners/8211/2025/2/12/images/67acab8c3a0000ea00415fd2/desktop.jpg?1739369356"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover"
          src="https://kinoplan.io/uploads/banners/8211/2025/2/19/images/67b5999f3c0000890099556f/desktop.jpg?1739954592"
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase;
