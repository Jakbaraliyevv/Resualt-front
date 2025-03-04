import logo from "../../assets/logo.svg";
import insta from "../../assets/instaIcon.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="bg-[#263238] py-3">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div className="flex items-center gap-11">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#FFF] text-[19px] font-medium">Ташкент</h2>
            <p className="text-[17px] text-[#667076]">
              Парк Magic City,
              <br /> ул. Бабура, 174
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              className="text-[#FFF] text-[19px] font-medium"
              href="tel:+998902006469"
            >
              +998(71) 2052050
            </a>
            <p className="text-[17px] text-[#667076]">Для Информации</p>
          </div>
        </div>
        <div className="flex items-center gap-7">
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

          <button className="w-[180px] h-[34px] bg-[#00bfa5] rounded-[40px] text-[#FFF] text-[15px]">
            Мне не пришёл билет
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
