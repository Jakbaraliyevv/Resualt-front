import footerLOgo from "../../../assets/logo.svg";
import appstore from "../../../assets/appStore.svg";
import google from "../../../assets/google.svg";
import { Link } from "react-router-dom";
function FooterTop() {
  return (
    <section className="bg-[#263238] py-7">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img src={footerLOgo} alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="#"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=ru.kinoplan.cinema.magiccinematashkent",
                "_blank"
              )
            }
          >
            <img className="" src={appstore} alt="" />
          </Link>

          <Link
            to="#"
            onClick={() =>
              window.open(
                "https://apps.apple.com/uz/app/magic-cinema/id1644088586",
                "_blank"
              )
            }
          >
            <img className="" src={google} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FooterTop;
