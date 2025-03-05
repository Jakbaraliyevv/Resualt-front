import { useState } from "react";
import Segodnaya from "./afishaMovie/segodnaya";
import Zavtra from "./afishaMovie/zavtra";

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
    </section>
  );
}

export default AfishaComponents;
