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
          <Link to={""}>
            <img src={appstore} alt="" />
          </Link>
          <Link to={""}>
            <img src={google} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FooterTop;
