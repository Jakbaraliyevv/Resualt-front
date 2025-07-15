import { useEffect, useState } from "react";
import karona from "../../assets/karona.svg";
import { useAxios } from "../../hooks/axios";
import { Movie } from "../../types";

function MovieCard1() {
  const axios = useAxios();
  const [data, setData] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/movie/movies",
    })
      .then((response) => {
        const movies = response.data as Movie[];

        const today = new Date().toISOString().split("T")[0];

        const filteredData = movies.filter((movie: Movie) => {
          return movie.availableDate <= today;
        });

        setData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const handleBuyTicket = (movie: Movie) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Iltimos, ro‘yxatdan o‘ting!");
      return;
    }
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const confirmPurchase = () => {
    if (selectedMovie) {
      axios({
        method: "POST",
        url: `/movie/ticket/${selectedMovie._id}`,
      })
        .then(() => {
          setData((prevData) =>
            prevData.map((movie) =>
              movie._id === selectedMovie._id
                ? { ...movie, count: (movie.count ?? 0) - 1 }
                : movie
            )
          );
          setShowModal(false);
        })
        .catch((error) => {
          console.error("Bilet sotib olishda xatolik:", error);
        });
    }
  };

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
            {data.map((value: Movie) => (
              <div
                className="w-[170px] h-[70px] rounded-md flex items-center border-[2px] border-[#00bfa5]"
                key={value._id}
              >
                <div className="flex flex-col gap-1 w-full h-full items-center">
                  {value.count && value.count > 0 ? (
                    <button
                      onClick={() => handleBuyTicket(value)}
                      className="bg-[#00bfa5] w-full h-[50%] rounded-tl-sm text-[#FFF] text-[19px] font-medium"
                    >
                      {value.availableTime}
                    </button>
                  ) : (
                    <p className="text-red-500 font-bold">Bilet tugadi</p>
                  )}
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
            ))}

            <p className="pl-4 text-[14px]">Зал №3 - Премьер</p>
          </div>
        </div>
      ))}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2>Bilet sotib olasizmi?</h2>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={confirmPurchase}
              >
                Ha
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Yo‘q
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MovieCard1;
