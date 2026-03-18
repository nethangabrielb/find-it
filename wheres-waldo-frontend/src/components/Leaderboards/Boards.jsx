import { Link } from "react-router-dom";
import Board from "./Board";
import useGame from "../../hooks/useGame";
import Button from "../Button";

const BoardDisplay = ({ game }) => {
  return (
    <>
      <p className="text-last font-extrabold tracking-tight text-3xl">
        Leaderboard
      </p>
      <Board game={game.game}></Board>
      <div className="flex gap-4 text-lg">
        <Button color="bg-last text-main text-xl" route="/">
          Home
        </Button>
        <Button
          color="bg-secondary text-last text-xl"
          route={game && `/${game.game.name.split(" ").join("").toLowerCase()}`}
        >
          Retry
        </Button>
      </div>
    </>
  );
};

const Universe11Board = () => {
  const { game } = useGame(3);

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-8">
      {game && <BoardDisplay game={game}></BoardDisplay>}
    </div>
  );
};

const FiveDaysBoard = () => {
  const { game } = useGame(2);

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-8">
      {game && <BoardDisplay game={game}></BoardDisplay>}
    </div>
  );
};

const GamerVerseBoard = () => {
  const { game } = useGame(1);

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-8">
      {game && <BoardDisplay game={game}></BoardDisplay>}
    </div>
  );
};

export { Universe11Board, GamerVerseBoard, FiveDaysBoard };
