import payme from "../../assets/payme.svg";
import click from "../../assets/click.svg";
import insta from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="bg-[#000] text-[#FFF]">
      <div className="w-[90%] m-auto flex flex-col gap-[40px] py-[40px]">
        <div className="flex items-start justify-between">
          <div className="flex items-start justify-between w-[35%]">
            <div className="flex flex-col gap-4">
              <h2 className="text-[19px] text-[#FFF] font-medium">Меню</h2>
              <a className="text-[17px] text-[#009c86]" href="#">
                Афиша
              </a>
              <a className="text-[17px] text-[#009c86]" href="#">
                Сеансы
              </a>
              <a className="text-[17px] text-[#009c86]" href="#">
                Скоро в кино
              </a>
              <a className="text-[17px] text-[#009c86]" href="#">
                Кинотеатр
              </a>
              <a className="text-[17px] text-[#009c86]" href="#">
                Контакты
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px] text-[#FFF] font-medium">
                Способы оплаты
              </h2>
              <div className="flex items-center gap-4">
                <img className="w-[45px] cursor-pointer" src={payme} alt="" />
                <img className="w-[45px] cursor-pointer" src={click} alt="" />
              </div>
              <h2 className="text-[17px] text-[#FFF] font-normal">
                Социальные сети
              </h2>
              <Link
                to="#"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/_1.jakbaraliyev_?igsh=MWJqbTc3aWZ1N3o2Yg%3D%3D&utm_source=qr",
                    "_blank"
                  )
                }
              >
                <img className="w-[37px]" src={insta} alt="" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 pr-[117px]">
            <div className="flex flex-col gap-2">
              <h2 className="text-[19px] text-[#FFF] font-medium">Ташкент</h2>
              <p className="text-[17px] text-[#009c86]">ул. Бабура, 174</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[17px] text-[#FFF] font-medium">Контакты</h3>
              <a
                className="text-[22px] text-[#009c86] font-medium"
                href="tel:+998(71) 2052050"
              >
                +998(71) 2052050
              </a>
              <p className="text-[13px] text-[#a3a3a3]">Для Информации</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[17px] text-[#FFF] font-medium">
                Время работы
              </h2>
              <p className="text-[17px] text-[#a3a3a3]">С 10-00 до 23-00</p>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-[17px] text-[#fff]">© 2025. Все права защищены</p>
              <p className="text-[17px] text-[#fff]">
                Разработано в <span className="text-[17px] text-[#009c86]">Киноплане</span>
              </p>
            </div>
            <div className="w-[70%]">
              <p className="text-[15px] text-[#a3a3a3]">
                Все сеансы начинаются с рекламно-информационного блока. Точную
                продолжительность сеансов можно уточнить в кинотеатре.
              </p>
            </div>
          </div>
          <button className="w-[290px] h-[40px] text-[#333] bg-[#FFF] rounded-md">
            Версия для слабовидящих
          </button>
        </div>
      </div>
    </section>
  );
}

export default Footer;
