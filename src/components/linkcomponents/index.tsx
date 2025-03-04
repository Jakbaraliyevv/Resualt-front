import { Link } from "react-router-dom";

function LinksComponents() {
  const linksStyle = "text-[19px] font-medium text-[#000]";
  return (
    <section className="bg-[#FFF] py-4 shadow-[0px_5px_15px_rgba(0,0,0,0.1)]">
      <div className="w-[90%] m-auto flex items-center gap-9">
        <Link className={linksStyle} to={"/"}>
          Афиша
        </Link>
        <Link className={linksStyle} to={"/seans"}>
          Сеансы
        </Link>
        <Link className={linksStyle} to={"/kino"}>
          Скоро в кино
        </Link>
        <Link className={linksStyle} to={"/teater"}>
          Кинотеатр
        </Link>
        <Link className={linksStyle} to={"/contact"}>
          Контакты
        </Link>
        <div className="flex items-center gap-4">
          <button className="w-[110px] h-[29px] bg-[#00bfa5] rounded-[40px] text-[#FFF] text-[13px]">
            Войти
          </button>
          <button className="w-[160px]  h-[34px] bg-[#00bfa5]  rounded-[40px] text-[#FFF] text-[15px]">
            Написать отзыв
          </button>
        </div>
      </div>
    </section>
  );
}

export default LinksComponents;
