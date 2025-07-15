import { useEffect, useState } from "react";
import karona from "../../assets/karona.svg";
import { useAxios } from "../../hooks/axios";
import { Movie } from "../../types";

function MovieCard2() {
  const axios = useAxios();
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/movie/movies",
    })
      .then((response) => {
        if (Array.isArray(response.data)) {
          const allMovies = response.data as Movie[];

          const today = new Date();
          today.setDate(today.getDate() + 1);
          const tomorrow = today.toISOString().split("T")[0];

          const filteredData = allMovies.filter(
            (movie: Movie) => movie.availableDate === tomorrow
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
    <section className="grid grid-cols-4 gap-4 p-4">
      {data.map((value) => (
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
          <h2>{value.title}</h2>
          <div className="flex items-center gap-4">
            <button className="bg-[#f2f2f5] w-[36px] h-[28px] rounded-md text-[12px] text-[#727276]">
              {value.ageRestriction}+
            </button>
            <button className="w-[55px] h-[28px] bg-[#f2f2f5] rounded-md text-[12px] text-[#727276]">
              {value.genre}
            </button>
          </div>
          <div>
            <div className="w-[170px] h-[70px] rounded-md flex items-center border-[2px] border-[#00bfa5]">
              <div className="flex flex-col gap-1 w-full h-full items-center">
                <button className="bg-[#00bfa5] w-full h-[50%] rounded-tl-sm text-[#FFF] text-[19px] font-medium">
                  {value.availableTime}
                </button>

                <div className="flex items-center gap-2 text-[#4c4c4f] text-[15px]">
                  <p>{value.format}</p>
                  <p>от {value.price} сум</p>
                </div>
              </div>

              <button className="border-l-[2px] px-3 h-full border-[#00bfa5] flex flex-col items-center justify-center">
                <img className="w-[19px]" src={karona} alt="VIP" />
                <p className="text-[14px]">VIP</p>
              </button>
            </div>
            <p className="pl-4 text-[14px]">Зал №3 - Премьер</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MovieCard2;
