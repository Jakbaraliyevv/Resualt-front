import { Flex, Input } from "antd";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

function Verify() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <section className="bgcolor">
      <div className=" w-[90%] m-auto flex items-center justify-center h-full">
        <div className="bgcolorKichik w-[60%]">
          <div className="flex items-center justify-center w-[50%] p-9 h-full">
            <form className="flex w-full  items-center justify-center flex-col gap-5">
              <h2 className="text-[17px]  text-[#00bfa5] font-medium">
                Tasdiqlash codini kiritig:
              </h2>
              <Flex gap="middle" align="flex-start" vertical>
                <Flex gap="middle" align="flex-start" vertical>
                  <Input.OTP
                    value={code}
                    onChange={(value) => {
                      console.log(value, "current code");
                      setCode(value);
                    }}
                    style={{ width: "400px" }}
                  />
                </Flex>
              </Flex>

              <button
                disabled={loading} // 🔥 loading bo'lsa tugma disable bo'ladi
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
