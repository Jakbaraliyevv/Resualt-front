import { NavLink, useNavigate } from "react-router-dom";

function LinksComponents() {
  const navigate = useNavigate();

  const userData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

  const token = localStorage.getItem("token");
  console.log(userData, token);
  return (
    <section className="bg-[#FFF] py-4 shadow-[0px_5px_15px_rgba(0,0,0,0.1)]">
      <div className="w-[90%] m-auto flex items-center gap-9">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative text-[19px] font-medium text-[#000] pb-2 group ${
              isActive ? "text-[#00bfa5]" : ""
            }`
          }
        >
          Афиша
          <span
            className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300 
            group-hover:w-full 
            ${window.location.pathname === "/" ? "w-full" : ""}`}
          ></span>
        </NavLink>

        <NavLink
          to="/seans"
          className={({ isActive }) =>
            `relative text-[19px] font-medium text-[#000] pb-2 group ${
              isActive ? "text-[#00bfa5]" : ""
            }`
          }
        >
          Сеансы
          <span
            className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300 
            group-hover:w-full 
            ${window.location.pathname === "/seans" ? "w-full" : ""}`}
          ></span>
        </NavLink>

        <NavLink
          to="/kino"
          className={({ isActive }) =>
            `relative text-[19px] font-medium text-[#000] pb-2 group ${
              isActive ? "text-[#00bfa5]" : ""
            }`
          }
        >
          Скоро в кино
          <span
            className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300 
            group-hover:w-full 
            ${window.location.pathname === "/kino" ? "w-full" : ""}`}
          ></span>
        </NavLink>

        <NavLink
          to="/teater"
          className={({ isActive }) =>
            `relative text-[19px] font-medium text-[#000] pb-2 group ${
              isActive ? "text-[#00bfa5]" : ""
            }`
          }
        >
          Кинотеатр
          <span
            className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300 
            group-hover:w-full 
            ${window.location.pathname === "/teater" ? "w-full" : ""}`}
          ></span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative text-[19px] font-medium text-[#000] pb-2 group ${
              isActive ? "text-[#00bfa5]" : ""
            }`
          }
        >
          Контакты
          <span
            className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300 
            group-hover:w-full 
            ${window.location.pathname === "/contact" ? "w-full" : ""}`}
          ></span>
        </NavLink>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/auth")}
            className="w-[110px] h-[29px] bg-[#00bfa5] rounded-[40px] text-[#FFF] text-[13px]"
          >
            {token ? userData.first_name : "Войти"}
          </button>

          <button className="w-[160px] h-[34px] bg-[#00bfa5] rounded-[40px] text-[#FFF] text-[15px]">
            Написать отзыв
          </button>
        </div>
      </div>
    </section>
  );
}

export default LinksComponents;
