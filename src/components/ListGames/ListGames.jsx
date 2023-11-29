import {
  FreeItem,
  GameDescr,
  GameImg,
  GameTitle,
  GamesInfoWrap,
  GamesItem,
  GamesList,
  GenreItem,
  GenresWrap,
  TopItem,
} from "./ListGames.styled";

const ListGames = ({ data }) => {
  return (
    <GamesList>
      {data?.games.map(
        ({
          _id,
          gameImage,
          commonGameName,
          gameDescription,
          inTop,
          genre,
          gameClass,
        }) => (
          <GamesItem key={_id}>
            <GameImg src={gameImage} alt={commonGameName} />
            <GamesInfoWrap>
              <GameTitle>{commonGameName}</GameTitle>
              <GameDescr>
                {gameDescription
                  ? gameDescription.slice(0, 180) + "..."
                  : " Опис відсутній"}
              </GameDescr>
            </GamesInfoWrap>
            <GenresWrap>
              {inTop && <TopItem>TOP</TopItem>}
              {genre && <GenreItem>{genre}</GenreItem>}
            </GenresWrap>
            <FreeItem>{gameClass}</FreeItem>
          </GamesItem>
        )
      )}
    </GamesList>
  );
};

export default ListGames;
