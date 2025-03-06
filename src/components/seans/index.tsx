import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/axios";

interface Movie {
  id: number;
  title: string;
  price: number;
  ageRestriction: number;
  availableDate: string;
  availableTime: string;
  count: number;
}

function SeansComponents() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const axios = useAxios();

  useEffect(() => {
    axios({
      method: "GET",
      url: "/movie/movies",
    })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setMovies(response.data);
        } else {
          console.error("API noto‘g‘ri ma’lumot qaytardi:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <section className="py-10 w-[90%] mx-auto">
      <div className="space-y-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between border-l-4 border-[#00796b] transition-transform hover:scale-105"
            >
              {/* Sana & Vaqt */}
              <button className="bg-[#00796b] text-white px-4 py-2 rounded-md text-sm font-semibold">
                📅 {movie.availableDate} | ⏰ {movie.availableTime}
              </button>

              {/* Kino ma’lumotlari */}
              <div className="text-center">
                <h2 className="text-lg font-bold text-gray-800">
                  {movie.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1 font-medium">
                  💰 {movie.price} so‘m
                </p>
              </div>

              {/* Yosh chegarasi va mavjud joylar */}
              <div className="text-right">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs font-semibold">
                  🔞 {movie.ageRestriction}+
                </span>
                <p className="text-gray-500 text-sm mt-2">
                  🎟 {movie.count} ta joy
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Hozircha kino yo‘q</p>
        )}
      </div>
    </section>
  );
}

export default SeansComponents;
