import { useState } from "react";
import Segodnaya from "./afishaMovie/segodnaya";
import Zavtra from "./afishaMovie/zavtra";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import MovieCard3 from "../movie_card3";

function AfishaComponents() {
  const [activeButton, setActiveButton] = useState("Сегодня");
  return (
    <section>
      <div className="bg-[#f2f2f5] py-4">
        <div className="w-[90%] m-auto flex items-center gap-7">
          <button
            className={`w-[140px] h-[40px] rounded-[40px] text-[15px] transition-all duration-300 
          ${
            activeButton === "Сегодня"
              ? "bg-[#00bfa5] text-white shadow-lg"
              : "bg-white text-black shadow-md"
          }`}
            onClick={() => setActiveButton("Сегодня")}
          >
            Сегодня
          </button>

          <button
            className={`w-[140px] h-[40px] rounded-[40px] text-[15px] transition-all duration-300 
          ${
            activeButton === "Завтра"
              ? "bg-[#00bfa5] text-white shadow-lg"
              : "bg-white text-black shadow-md"
          }`}
            onClick={() => setActiveButton("Завтра")}
          >
            Завтра
          </button>
        </div>
      </div>

      <div className="mt-4">
        {activeButton === "Сегодня" && <Segodnaya />}
        {activeButton === "Завтра" && <Zavtra />}
      </div>

      <div className=" bg-[#f2f2f5] mt-7">
        <div className="w-[90%] m-auto py-[40px]">
          <div className=" flex items-center justify-between">
            <h2 className="text-[29px] font-bold">Скоро в кино</h2>
            <Link
              className="flex items-center gap-4 text-[17px] font-medium text-[#191919]"
              to={"/kino"}
            >
              Показать все <FaChevronRight size={19} />
            </Link>
          </div>
          <div className="mt-7">
            <MovieCard3 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AfishaComponents;
