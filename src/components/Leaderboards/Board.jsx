const Board = ({ game }) => {
  return (
    <div
      className="flex flex-col items-center text-lg border border-last/15 p-5 h-[420px] w-full overflow-auto bg-secondary text-last shadow-board hover:shadow-board-hover hover:-translate-2 hover:-translate-y-2 transition-all rounded-3xl [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]
  [&::-webkit-scrollbar-track]:bg-last
  [&::-webkit-scrollbar-thumb]
  [&::-webkit-scrollbar-thumb]:bg-main"
    >
      <h1 className="text-2xl font-extrabold tracking-tight">{game.name}</h1>
      <div className="flex justify-between w-full">
        <p className="font-bold">Name</p>
        <p className="font-bold">Score</p>
      </div>
      <div className="h-px w-full bg-last/20 my-2" />
      {game.User &&
        game.User.length > 0 &&
        game.User.map((player) => {
          return (
            <div className="flex justify-between w-full" key={player.id}>
              <p>{player.name}</p>
              <p>{player.formattedScore}</p>
            </div>
          );
        })}
      {(!game.User || game.User.length === 0) && (
        <div className="flex flex-col items-center justify-center text-center text-last/80 flex-1">
          <p className="font-semibold">No scores yet</p>
          <p className="text-sm">Be the first to set a record.</p>
        </div>
      )}
    </div>
  );
};

export default Board;
