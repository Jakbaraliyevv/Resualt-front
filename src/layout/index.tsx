import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/home/index";
function LayoutComponents() {
  return (
    <section>
      <Home />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default LayoutComponents;
