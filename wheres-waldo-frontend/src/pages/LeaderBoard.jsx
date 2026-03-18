import Board from "../components/Leaderboards/Board";
import useGames from "../hooks/useGames";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const LeaderBoard = () => {
  const { games } = useGames();
  const { setGames } = useOutletContext();

  useEffect(() => {
    setGames(games);
  }, [games, setGames]);

  return (
    <>
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-last">
          Leaderboards
        </h1>
        <p className="text-base sm:text-lg text-tertiary/80 max-w-2xl">
          Fastest times per scene. Can you make the top spot?
        </p>
      </div>
      <div className="h-px w-full bg-last/10 my-2" />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] w-full gap-8 sm:gap-10">
        {games.map((game) => {
          return <Board game={game} key={game.id}></Board>;
        })}
      </div>
    </>
  );
};

export default LeaderBoard;
