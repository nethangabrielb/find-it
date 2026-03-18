import { useNavigate } from "react-router-dom";

const GamesMenu = ({ game, setGame }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    setGame(game);
    localStorage.setItem("game", JSON.stringify(game));
    navigate(`/${game.name.split(" ").join("").toLowerCase()}`);
  };

  return (
    <section
      className="group w-[320px] sm:w-[340px] h-fit border border-last/15 rounded-3xl bg-main/40 hover:bg-main/70 hover:shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition-all cursor-pointer overflow-hidden"
      onClick={handleRedirect}
    >
      <div className="relative">
        <img
          src={game.url}
          alt={game.name}
          className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-last/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-main font-bold text-2xl leading-tight drop-shadow-sm">
            {game.name}
          </p>
          <p className="text-main/80 text-sm">Tap to play</p>
        </div>
      </div>
    </section>
  );
};

export default GamesMenu;
