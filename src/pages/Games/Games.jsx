import { useState } from "react";
import { useGames } from "../../hooks/useGames";
import { GamesWrap } from "./Games.styled";

import Button from "../../components/Button/Button";
import Filters from "../../components/Filters/Filters";
import ListGames from "../../components/ListGames/ListGames";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

const allGenres = [
  "ALL",
  "FREE",
  "MOBA",
  "SHOOTERS",
  "LAUNCHERS",
  "MMORPG",
  "STRATEGY",
  "FIGHTING",
  "RACING",
  "SURVIVAL",
  "ONLINE",
];

const Games = () => {
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("ALL");
  const [isFresh, setIsFresh] = useState(true);
  const { data, isError, error, isLoading } = useGames(page, genre, isFresh);

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  const onHandleChange = (e) => {
    setGenre(e.target.value);
    setPage(1);
  };
  const toogleIsFresh = () => {
    setIsFresh((prev) => !prev);
    setPage(1);
  };
  return (
    <>
      <GamesWrap>
        <Filters
          allGenres={allGenres}
          onHandleChange={onHandleChange}
          genre={genre}
          toogleIsFresh={toogleIsFresh}
          isFresh={isFresh}
        />
        <ListGames data={data} />
        {data?.games.length < data?.gamesListLength && (
          <Button
            text="Показати ще"
            onClick={onLoadMore}
            style={{ margin: "0 auto" }}
          />
        )}
      </GamesWrap>
      {isError && toast.error(error.message)}
      {isLoading && <Loader />}
    </>
  );
};

export default Games;
