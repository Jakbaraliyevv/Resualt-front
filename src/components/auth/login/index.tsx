import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";
import { LoginType } from "../../../types";
import { useAxios } from "../../../hooks/axios";
import { useNavigate } from "react-router-dom";
import notificationApi from "../../../generic/notificition";

function Login() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const labelStyle = "text-[17px] font-medium text-[#00bfa5]";

  // login start
  const axios = useAxios();
  const navigate = useNavigate();
  const notify = notificationApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const getData = (e: React.FormEvent) => {
    e.preventDefault();

    const data: LoginType = {
      email: email,
      password: password,
    };

    console.log(data, "datatatta");
    if (!email || !password) {
      notify({ type: "full" });
      return;
    }

    if (!validateEmail(email)) {
      notify({ type: "forma" });
      return;
    }
    setLoading(true);

    axios({
      url: "/auth/sign-in",
      method: "POST",
      data,
    })
      .then((data) => {
        console.log(data, "data");
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        notify({ type: "login" });
        navigate("/");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        notify({ type: "notEmail2" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="w-full">
      <form className="w-[50%] p-7 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className={labelStyle}>Email</label>
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-[2px] border-[#00bfa5] rounded-[6px] outline-none p-1"
            type="email"
            placeholder="Inter your email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelStyle}>Password</label>
          <div className="relative">
            <input
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              min={6}
              max={12}
              className="w-full border-[2px] border-[#00bfa5] rounded-[6px] outline-none p-1"
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
          onClick={(e) => getData(e)}
          disabled={loading}
          className={`w-full bg-[#00bfa5] text-[#FFF] p-1.5 rounded-[6px] mt-4 
    transition-all duration-300 
    ${
      loading
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-[#00bfa5] opacity-100"
    }`}
        >
          {loading ? <LoadingOutlined /> : "Login"}
        </button>
      </form>
    </section>
  );
}

export default Login;
