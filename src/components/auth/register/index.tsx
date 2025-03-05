import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAxios } from "../../../hooks/axios";
import notificationApi from "../../../generic/notificition";
import { RegisterTYpe } from "../../../types";
import { useNavigate } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const labelStyle = "text-[17px] font-medium text-[#00bfa5]";
 

  // Start Register
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const notify = notificationApi();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

 

  const getUserData = (e: React.FormEvent) => {
    e.preventDefault();

    const data: RegisterTYpe = {
      first_name: name,
      last_name: surName,
      email: email,
      password: password,
    };

    console.log(data, "data");
    if (!name || !surName || !email || !password) {
      notify({ type: "full" });
      return;
    }
    if (!validateEmail(email)) {
      notify({ type: "forma" });
      return;
    }
    if (password.length < 6) {
      notify({ type: "passwordWrong" });
      return;
    }
    setLoading(true);

    axios({
      method: "POST",
      url: "/auth/sign-up",
      data: data,
    })
      .then((data) => {
        console.log(data, "data29");
        notify({ type: "register" });
        setName("");
        setSurName("");
        setEmail("");
        setPassword("");
        console.log("Inputlar tozalandi!");
        navigate("/verify");
      })
      .catch((error) => {
        console.log(error.response ? error.response.data : error, "catch");
        notify({ type: "registerError" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="w-full">
      <form className="w-[50%] p-7 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className={labelStyle}>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-[14px] w-full border-[2px] border-[#00bfa5] rounded-[6px] outline-none p-1"
            type="text"
            placeholder="Inter your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelStyle}>Surname</label>
          <input
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
            className="w-full text-[14px] border-[2px] border-[#00bfa5] rounded-[6px] outline-none p-1"
            type="text"
            placeholder="Inter your surname"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelStyle}>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-[14px] border-[2px] border-[#00bfa5] rounded-[6px] outline-none p-1"
            type="email"
            placeholder="Inter your email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelStyle}>Password</label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              min={6}
              max={12}
              className="w-full text-[14px]  border-[2px] border-[#00bfa5] rounded-[6px] outline-none p-1"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </div>

        <button
          onClick={(e) => getUserData(e)}
          disabled={loading}
          className={`w-full bg-[#00bfa5] text-[#FFF] p-1.5 rounded-[6px] mt-4 transition-all duration-300 ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#00bfa5] opacity-100"
          }`}
        >
          {loading ? <LoadingOutlined /> : "Register"}
        </button>
      </form>
    </section>
  );
}

export default Register;
