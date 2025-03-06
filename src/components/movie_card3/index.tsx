import { useEffect, useState } from "react";
// import karona from "../../assets/karona.svg";
import { useAxios } from "../../hooks/axios";
import { Movie } from "../../types";

function MovieCard3() {
  const axios = useAxios();
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/movie/movies",
    })
      .then((response) => {
        if (Array.isArray(response.data)) {
          // Bugungi sanani olish
          const today = new Date();
          today.setDate(today.getDate() + 1); // Ertangi sana
          const tomorrow = today.toISOString().split("T")[0];

          // Faqat ertadan keyingi kun bo'lgan filmlarni olish
          const filteredData = response.data.filter(
            (movie: Movie) => movie.availableDate > tomorrow
          );

          setData(filteredData);
        } else {
          console.error("API noto‘g‘ri ma’lumot qaytardi:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <section className="grid grid-cols-4 gap-4 py-[60px]">
      {data.map((value: Movie) => (
        <div
          key={value._id}
          className="flex flex-col gap-4 w-[265px] h-[570px]"
        >
          <div>
            <img
              className="rounded-xl h-[420px]"
              src={value.image}
              alt={value.title}
            />
          </div>
          <h2 className="text-[19px] font-bold text-[#000]">{value.title}</h2>
          <div className="flex items-center gap-4">
            <button className="bg-[#bfbfbf]  w-[36px] h-[28px] rounded-md text-[14px] text-[#000]">
              {value.ageRestriction}+
            </button>
            <button className="w-[55px] h-[28px] bg-[#bfbfc3] rounded-md text-[14px] text-[#000]">
              {value.genre}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[19px] font-medium">{value?.availableDate}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MovieCard3;
