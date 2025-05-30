import { useState } from "react";
import { ChevronDown, Upload, Eye, X } from "lucide-react";

function Elon() {
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [isNegotiable, setIsNegotiable] = useState(false);

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-8">
      <div className="w-[80%]  m-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              E'lon berish
            </h1>
          </div>
          <div className="mb-5 w-[60%]">
            <p className="text-gray-600 mb-2">E'lon turi</p>
            <div className="relative">
              <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10">
                <option value="Xizmat Eloni">Xizmat Eloni</option>
                <option value="Ish Eloni">Ish Eloni</option>
                <option value="Mahsulot Eloni">Mahsulot Eloni</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3.5 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              Xizmat haqida ma'lumotlar
            </h1>

            <div className="mb-6">
              <p className="text-gray-600 mb-2">Xizmat nomi</p>
              <input
                type="text"
                placeholder="Nomni kiriting"
                className="w-full p-3 border border-gray-300 rounded-lg bg-[#f8f8f8]"
              />
            </div>

            <div className="mb-6 w-[70%]">
              <p className="text-gray-600 mb-2">Narx oraligi</p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex gap-2 flex-1">
                  <input
                    type="number"
                    placeholder="0"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([+e.target.value, priceRange[1]])
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg bg-[#f8f8f8]"
                  />
                  <input
                    type="number"
                    placeholder="10000000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], +e.target.value])
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg bg-[#f8f8f8]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => setIsNegotiable(!isNegotiable)}
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
                      isNegotiable ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full transition-transform ${
                        isNegotiable ? "transform translate-x-6" : ""
                      }`}
                    ></div>
                  </div>

                  <label className="text-gray-600">Kelishiladi</label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              Xizmat sharoiti
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-gray-600 mb-2">Hudud</h3>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-[#f8f8f8] pr-10">
                    <option value="">Viloyat</option>
                    <option value="Toshkent">Toshkent</option>
                    <option value="Samarqand">Samarqand</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-3.5 text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-gray-600 mb-2">Tuman (Shahar)</h3>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-[#f8f8f8] pr-10">
                    <option value="">Tuman yoki Shahar</option>
                    <option value="Yunusobod">Yunusobod</option>
                    <option value="Mirzo Ulug'bek">Mirzo Ulug'bek</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-3.5 text-gray-400"
                    size={20}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 mb-2">Manzil</h3>
              <input
                type="text"
                placeholder="Manzil to'liq holatda"
                className="w-full p-3 border border-gray-300 rounded-lg bg-[#f8f8f8]"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Tajriba va ish vaqti
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-gray-600 mb-2">Tajriba</h3>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-[#f8f8f8] pr-10">
                    <option value="">Tajriba</option>
                    <option value="1 yil">1 yil</option>
                    <option value="3 yil">3 yil</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-3.5 text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-gray-600 mb-2">Ish vaqti</h3>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-[#f8f8f8] pr-10">
                    <option value="">Ish vaqti</option>
                    <option value="9:00-18:00">9:00-18:00</option>
                    <option value="Fleksibil">Fleksibil</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-3.5 text-gray-400"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              To'liq ma'lumot
            </h1>
            <div>
              <h3 className="text-gray-600 mb-2">Qisqacha ma'lumot</h3>
              <textarea
                placeholder="Xizmat haqida to'liq ma'lumot..."
                className="w-full p-3 border border-gray-300 rounded-lg min-h-[150px] bg-[#f8f8f8]"
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              Xizmat Rasimlari
            </h1>

            <div className="mb-6">
              <h3 className="text-gray-600 mb-2">Rasimlar</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                <p className="text-gray-500 mb-2">
                  <span className="text-[#41a58d] cursor-pointer">
                    {" "}
                    Upload a file
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-gray-400 text-sm">PNG, JPG, GIF up to 5MB</p>
              </div>
            </div>

            <div className="w-[60%]">
              <h3 className="text-gray-600 mb-2">Holati</h3>
              <div className="relative">
                <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-[#f8f8f8] pr-10 ">
                  <option value="active">Aktiv</option>
                  <option value="inactive">Noaktiv</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-3.5 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 ">
            <button className="bg-[#41a58d] hover:bg-[#27806b] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2">
              <span>Qo'shish</span>
              <span className="text-xl">+</span>
            </button>

            <div className="flex gap-4">
              <button className="border text-[#41a58d] border-[#41a58d] hover:bg-[#41a58d] hover:text-[#FFF] py-3 px-6 rounded-lg flex items-center gap-2">
                <Eye className="" size={18} />
                <span className="">Oldindan ko'rish</span>
              </button>

              <button className="text-[#41a58d] hover:text-[#27806b] flex items-center gap-2">
                <X size={18} />
                <span>Bekor qilish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Elon;
