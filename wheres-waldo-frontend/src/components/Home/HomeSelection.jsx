import { useOutletContext } from "react-router-dom";
import GamesMenu from "./GamesMenu";

const HomeSelection = () => {
  const { games, loading, setGame } = useOutletContext();

  return (
    <>
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-last">
          Pick a scene and start tagging
        </h1>
        <p className="text-base sm:text-lg text-tertiary/80 max-w-2xl">
          Click the image to place a marker, then choose who you found. Fast,
          simple, and fun.
        </p>
      </div>
      <div className="h-px w-full bg-last/10 my-2" />
      <section className="flex flex-wrap justify-center gap-8 sm:gap-10 py-2">
        {games &&
          games.map((game) => {
            return (
              <GamesMenu
                game={game}
                key={game.id}
                loading={loading}
                setGame={setGame}
              ></GamesMenu>
            );
          })}
      </section>
    </>
  );
};

export default HomeSelection;
