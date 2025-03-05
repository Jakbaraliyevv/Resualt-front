import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const labelStyle = "text-[17px] font-medium text-[#00bfa5]";
  // Start Register

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumbur] = useState("");
  const [password, setPassword] = useState("");
  // const validateEmail = (email: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

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
        <div className="flex flex-col gap-2">
          <label className={labelStyle}>Phone number</label>
          <input
            value={number}
            onChange={(e) => setNumbur(e.target.value)}
            className="w-full text-[14px] border-[2px] border-[#00bfa5] rounded-[6px] outline-none p-1"
            type=""
            placeholder="Inter your phone"
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
