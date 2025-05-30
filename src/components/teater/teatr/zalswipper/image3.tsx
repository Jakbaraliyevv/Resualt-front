  import { Navigation, Thumbs } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/swiper-bundle.css"; // CSS importi
  import { useState } from "react";

  const Img3 = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
      <section className="w-[90%] m-auto">
        <div>
          <div className="py-[40px]">
            <h1 className="text-[37px] font-bold text-[#000]">
              Информация о залах
            </h1>
          </div>

          {/* Asosiy rasm uchun swiper */}
          <Swiper
            spaceBetween={10} // Slaydlardagi bo'shliq
            slidesPerView={1} // Har bir vaqtning o'zida bir rasm ko'rsatiladi
            navigation // Navigatsiya uchun o'zo'zgartirishlar qo'shildi
            thumbs={{ swiper: thumbsSwiper }} // Thumbs swiper bilan bog'lash
            modules={[Navigation, Thumbs]} // Thumbs va Navigation modullarini qo'llash
          >
            <SwiperSlide>
              <img
                className="w-full h-[700px]"
                src="https://kinoplan24.ru/uploads/hall_info/8211/hall_info/6149813e4a0000276b5d08ef/big-1632207166.jpg"
                alt="Rasm 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[700px]"
                src="https://kinoplan24.ru/uploads/hall_info/8211/hall_info/6149813e4a0000276b5d08ef/big-1634361601.jpg"
                alt="Rasm 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[700px]"
                src="https://kinoplan24.ru/uploads/hall_info/8211/hall_info/61724e1d4b00001600318219/big-1634881053.jpg"
                alt="Rasm 3"
              />
            </SwiperSlide>
          </Swiper>

          {/* Pastdagi kichik rasm uchun swiper */}
          <div className="flex items-center justify-center w-[60%] m-auto mt-4">
            <Swiper
              onSwiper={setThumbsSwiper} // Kichik rasm swiper'ini set qilish
              spaceBetween={40} // Kichik rasmlar orasidagi masofa 40px
              slidesPerView={3} // Pastdagi rasm kichkina bo'ladi
              watchSlidesProgress
              modules={[Thumbs]}
              className="thumbs"
            >
              <SwiperSlide>
                <img
                  className="w-[80%] cursor-pointer"
                  src="https://kinoplan24.ru/uploads/hall_info/8211/hall_info/6149813e4a0000276b5d08ef/big-1632207166.jpg"
                  alt="Rasm 1"
                  onClick={() => thumbsSwiper && thumbsSwiper.swipeTo(0)} // Kichik rasmga bosilganda asosiy rasmni o'zgartirish
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[80%] cursor-pointer"
                  src="https://kinoplan24.ru/uploads/hall_info/8211/hall_info/6149813e4a0000276b5d08ef/big-1634361601.jpg"
                  alt="Rasm 2"
                  onClick={() => thumbsSwiper && thumbsSwiper.swipeTo(1)} // Kichik rasmga bosilganda asosiy rasmni o'zgartirish
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[80%] cursor-pointer"
                  src="https://kinoplan24.ru/uploads/hall_info/8211/hall_info/61724e1d4b00001600318219/big-1634881053.jpg"
                  alt="Rasm 3"
                  onClick={() => thumbsSwiper && thumbsSwiper.swipeTo(2)} // Kichik rasmga bosilganda asosiy rasmni o'zgartirish
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-5 mt-[40px]">
            <h2 className="text-[22px] text-[#141414] font-medium">
              VIP зал №1 (Зал №1 VIP)
            </h2>
            <div className="flex items-center gap-7">
              <button className="w-[90px] h-[39px] text-[#141414] bg-[#f2f2f5] rounded-md">
                46 мест
              </button>
              <button className="w-[60px] h-[39px] text-[#141414] bg-[#f2f2f5] rounded-md">
                2D
              </button>
              <button className="w-[60px] h-[39px] text-[#141414] bg-[#f2f2f5] rounded-md">
                3D
              </button>
            </div>
            <p className="text-[17px] text-[#141414] font-normal">
              VIP зал с удобными кожаными раскладными креслами
            </p>
          </div>
        </div>
      </section>
    );
  };

  export default Img3;
