import { Outlet } from "react-router-dom";
import Home from "../pages/home/index";
import FooterTop from "../components/footer/footer-top";
import Footer from "../components/footer";
function LayoutComponents() {
  return (
    <section>
      <Home />
      <main>
        <Outlet />
      </main>
      <FooterTop />
      <Footer />
    </section>
  );
}

export default LayoutComponents;
