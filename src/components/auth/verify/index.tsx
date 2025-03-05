import { Flex, Input } from "antd";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useAxios } from "../../../hooks/axios";
import notificationApi from "../../../generic/notificition";
import { useNavigate } from "react-router-dom";
import { VerifyType } from "../../../types";

function Verify() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const axios = useAxios();
  const notify = notificationApi();
  const navigate = useNavigate();
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getData = (e: React.FormEvent) => {
    e.preventDefault();

    if (!code || !email) {
      notify({ type: "full" });

      return;
    }

    if (!validateEmail(email)) {
      notify({ type: "forma" });
      return;
    }

    const data: VerifyType = {
      email: email,
      code: code,
    };

    console.log(data);
    setLoading(true);
    axios({
      url: "/auth/verify",
      method: "POST",
      data,
    })
      .then((data) => {
        console.log(data.message, "Message");
        console.log(data);
        notify({ type: "suscessverfy", message1: data.message });
        navigate("/auth");
        setCode("");
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
        notify({ type: "errorCod", message2: error.response?.data?.message });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bgcolor">
      <div className=" w-[90%] m-auto flex items-center justify-center h-full">
        <div className="bgcolorKichik w-[60%]">
          <div className="flex items-center justify-center w-[50%] p-9 h-full">
            <form className="flex w-full  items-center justify-center flex-col gap-5">
              <h2 className="text-[17px]  text-[#00bfa5] font-medium">
                Tasdiqlash codini kiritig:
              </h2>
              <div className="w-full flex flex-col gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-[14px] border-[2px] border-[#00bfa5] rounded-[6px] outline-none p-1"
                  type="email"
                  placeholder="Inter your email"
                />
              </div>
              <Flex gap="middle" align="flex-start" vertical>
                <Flex gap="middle" align="flex-start" vertical>
                  <Input.OTP
                    value={code}
                    onChange={(value) => {
                      console.log(value, "current code");
                      setCode(value);
                    }}
                    style={{ width: "390px" }}
                  />
                </Flex>
              </Flex>

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
                {loading ? <LoadingOutlined /> : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Verify;
