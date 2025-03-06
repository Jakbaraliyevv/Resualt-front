// import { NavLink, useNavigate } from "react-router-dom";

// function LinksComponents() {
//   const navigate = useNavigate();

//   const userData = localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user") as string)
//     : null;

//   const token = localStorage.getItem("token");
//   console.log(userData, token);
//   return (
//     <section className="bg-[#FFF] py-4 shadow-[0px_5px_15px_rgba(0,0,0,0.1)]">
//       <div className="w-[90%] m-auto flex items-center gap-9">
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             `relative text-[19px] font-medium text-[#000] pb-2 group ${
//               isActive ? "text-[#00bfa5]" : ""
//             }`
//           }
//         >
//           Афиша
//           <span
//             className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300
//             group-hover:w-full
//             ${window.location.pathname === "/" ? "w-full" : ""}`}
//           ></span>
//         </NavLink>

//         <NavLink
//           to="/seans"
//           className={({ isActive }) =>
//             `relative text-[19px] font-medium text-[#000] pb-2 group ${
//               isActive ? "text-[#00bfa5]" : ""
//             }`
//           }
//         >
//           Сеансы
//           <span
//             className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300
//             group-hover:w-full
//             ${window.location.pathname === "/seans" ? "w-full" : ""}`}
//           ></span>
//         </NavLink>

//         <NavLink
//           to="/kino"
//           className={({ isActive }) =>
//             `relative text-[19px] font-medium text-[#000] pb-2 group ${
//               isActive ? "text-[#00bfa5]" : ""
//             }`
//           }
//         >
//           Скоро в кино
//           <span
//             className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300
//             group-hover:w-full
//             ${window.location.pathname === "/kino" ? "w-full" : ""}`}
//           ></span>
//         </NavLink>

//         <NavLink
//           to="/teater"
//           className={({ isActive }) =>
//             `relative text-[19px] font-medium text-[#000] pb-2 group ${
//               isActive ? "text-[#00bfa5]" : ""
//             }`
//           }
//         >
//           Кинотеатр
//           <span
//             className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300
//             group-hover:w-full
//             ${window.location.pathname === "/teater" ? "w-full" : ""}`}
//           ></span>
//         </NavLink>

//         <NavLink
//           to="/contact"
//           className={({ isActive }) =>
//             `relative text-[19px] font-medium text-[#000] pb-2 group ${
//               isActive ? "text-[#00bfa5]" : ""
//             }`
//           }
//         >
//           Контакты
//           <span
//             className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300
//             group-hover:w-full
//             ${window.location.pathname === "/contact" ? "w-full" : ""}`}
//           ></span>
//         </NavLink>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => navigate("/auth")}
//             className="w-[110px] h-[29px] bg-[#00bfa5] rounded-[40px] text-[#FFF] text-[13px]"
//           >
//             {token ? userData.first_name : "Войти"}
//           </button>

//           <button className="w-[160px] h-[34px] bg-[#00bfa5] rounded-[40px] text-[#FFF] text-[15px]">
//             Написать отзыв
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LinksComponents;

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function LinksComponents() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const userData = JSON.parse(localStorage.getItem("user") ?? "{}");

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth");
  };

  return (
    <section className="bg-[#FFF] py-4 shadow-[0px_5px_15px_rgba(0,0,0,0.1)]">
      <div className="w-[90%] m-auto flex items-center gap-9">
        {[
          { path: "/", label: "Афиша" },
          { path: "/seans", label: "Сеансы" },
          { path: "/kino", label: "Скоро в кино" },
          { path: "/teater", label: "Кинотеатр" },
          { path: "/contact", label: "Контакты" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `relative text-[19px] font-medium text-[#000] pb-2 group ${
                isActive ? "text-[#00bfa5]" : ""
              }`
            }
          >
            {label}
            <span
              className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#00bfa5] w-0 transition-all duration-300 
            group-hover:w-full 
            ${window.location.pathname === path ? "w-full" : ""}`}
            ></span>
          </NavLink>
        ))}

        <div className="flex items-center gap-4">
          {token ? (
            <button
              onClick={() => setShowModal(true)}
              className="w-[110px] h-[29px] bg-[#00bfa5] rounded-[40px] text-[#FFF] text-[13px]"
            >
              {userData.first_name}
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="w-[110px] h-[29px] bg-[#00bfa5] rounded-[40px] text-[#FFF] text-[13px]"
            >
              Войти
            </button>
          )}

          <button className="w-[160px] h-[34px] bg-[#00bfa5] rounded-[40px] text-[#FFF] text-[15px]">
            Написать отзыв
          </button>
        </div>
      </div>

      {/* Modal */}
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-8 rounded-2xl w-[480px] text-center shadow-lg relative z-[1001]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Profil ma’lumotlari
            </h2>
            <div className="text-gray-700 text-lg space-y-2">
              <p>
                <strong className="text-gray-900">Familya:</strong>{" "}
                {userData.last_name}
              </p>
              <p>
                <strong className="text-gray-900">Ism:</strong>{" "}
                {userData.first_name}
              </p>
              <p>
                <strong className="text-gray-900">Email:</strong>{" "}
                {userData.email}
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition-all duration-200"
              >
                Log Out
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition-all duration-200"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default LinksComponents;
