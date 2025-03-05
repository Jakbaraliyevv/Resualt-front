import { useState } from "react";
import Login from "./login";
import Register from "./register";

function AuthComponents() {
  const [changeLogin, setChangeLogin] = useState(false);
  return (
    <div className="bgcolor">
      <div className="w-[90%] m-auto flex items-center justify-center flex-col h-full">
        <div className="flex items-center gap-9">
          <h1
            onClick={() => setChangeLogin(false)}
            className="text-[24px] font-bold text-[#FFF] cursor-pointer"
          >
            Login
          </h1>
          <h1
            onClick={() => setChangeLogin(true)}
            className="text-[24px] font-bold text-[#00bfa5] cursor-pointer"
          >
            Register
          </h1>
        </div>
        <div className="flex w-[60%] h-full items-center justify-center bgcolorKichik mt-8 rounded-lg ">
          {changeLogin ? <Register /> : <Login />}
        </div>
      </div>
    </div>
  );
}

export default AuthComponents;
