import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import TeaterComponentsChild from "./teatr/teater";
import Zal from "./teatr/zal";

function TeaterComponents() {
  const [activeButton, setActiveButton] = useState("Сегодня");
  return (
    <section className="">
      <div className="bg-[#f2f2f5] py-7">
        <div className=" w-[90%] m-auto flex flex-col gap-[40px]">
          <div className="bg-[#FFF] p-7 rounded-lg shadow-[0_100px_80px_0_rgba(0,0,0,0.07),0_42px_33px_0_rgba(0,0,0,0.05),0_22px_18px_0_rgba(0,0,0,0.04),0_12px_10px_0_rgba(0,0,0,0.04),0_7px_5px_0_rgba(0,0,0,0.03),0_3px_2px_0_rgba(0,0,0,0.02)]">
            <h1>Magic Cinema</h1>
            <p>ул. Бабура, 174</p>
          </div>
          <div className="">
            <div className="flex items-center gap-7">
              <button
                className={`w-[140px] h-[40px] rounded-[40px] text-[15px] transition-all duration-300 
          ${
            activeButton === "Сегодня"
              ? "bg-[#00bfa5] text-white shadow-lg"
              : "bg-white text-black shadow-md"
          }`}
                onClick={() => setActiveButton("Сегодня")}
              >
                Кинотеатр
              </button>

              <button
                className={`w-[180px] h-[40px] rounded-[40px] text-[15px] transition-all duration-300 
          ${
            activeButton === "Завтра"
              ? "bg-[#00bfa5] text-white shadow-lg"
              : "bg-white text-black shadow-md"
          }`}
                onClick={() => setActiveButton("Завтра")}
              >
                Информация о залах
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {activeButton === "Сегодня" && <TeaterComponentsChild />}
        {activeButton === "Завтра" && <Zal />}
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
        </div>
      </div>
    </section>
  );
}

export default TeaterComponents;
