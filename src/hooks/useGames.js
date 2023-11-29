import axios from "axios";
import { useQuery } from "react-query";
const BASE_URL_GAMES = "https://api.miraplay.cloud/games/by_page";

export const useGames = (page, genre, isFresh) => {
  const dataGames = {
    page,
    isFreshGamesFirst: isFresh,
    genre: genre === "ALL" ? false : genre,
    gamesToShow: 9,
  };
  return useQuery({
    queryKey: ["games", page, genre, isFresh],
    queryFn: async () => {
      const { data } = await axios.post(`${BASE_URL_GAMES}`, dataGames);
      return data;
    },
  });
};
