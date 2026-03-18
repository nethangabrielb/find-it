import { useState, useRef, useEffect } from "react";
import Photo from "../components/Photos/Photo";
import { useOutletContext } from "react-router-dom";
import { intervalToDuration } from "date-fns";
import useTimer from "easytimer-react-hook";
import server from "../services/API";
import { useNavigate } from "react-router-dom";

const pad2 = (n) => String(n ?? 0).padStart(2, "0");

const formatClock = (timeValues) => {
  const h = Number(timeValues?.hours ?? 0);
  const m = Number(timeValues?.minutes ?? 0);
  const s = Number(timeValues?.seconds ?? 0);
  return h > 0 ? `${pad2(h)}:${pad2(m)}:${pad2(s)}` : `${pad2(m)}:${pad2(s)}`;
};

const GameStart = () => {
  let { game, setGame } = useOutletContext();
  const [gameLocalStorage, setGameLocalStorage] = useState(game);
  const [allCharactersFound, setAllCharactersFound] = useState(false);
  const [username, setUserName] = useState("");
  const [timerValue, setTimerValue] = useState({
    seconds: null,
    formatted: null,
  });
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [timer] = useTimer({});

  useEffect(() => {
    if (allCharactersFound === false) {
      timer.start();
      Object.keys(gameLocalStorage).length !== 0 &&
        gameLocalStorage.Character.map((char) => {
          if (char.isFound === undefined || char.isFound === true) {
            char.isFound = false;
          }
        });
    } else {
      // Get the timer values
      const timeValue = timer.getTimeValues();

      // Set the timer value and set game to over
      const totalSeconds =
        timeValue.seconds + timeValue.minutes * 60 + timeValue.hours * 60 * 60;
      const duration = intervalToDuration({
        start: 0,
        end: totalSeconds * 1000,
      });

      const formatted =
        duration.hours && duration.hours > 0
          ? `${pad2(duration.hours)}:${pad2(duration.minutes)}:${pad2(
              duration.seconds
            )}`
          : `${pad2(duration.minutes)}:${pad2(duration.seconds)}`;
      setTimerValue({
        seconds: totalSeconds,
        formatted,
      });
      if (allCharactersFound) {
        formRef.current.focus();
        inputRef.current.focus();
        document.body.style.overflow = "hidden";
      }
      timer.stop();
      setGame({});
    }
    return () => {
      document.body.style.overflow = "auto";
    };
    // We intentionally run this effect only when game completion flips,
    // to avoid restarting/stopping the timer due to unrelated state changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCharactersFound]);

  if (Object.keys(gameLocalStorage).length === 0) {
    const localStorageData = JSON.parse(localStorage.getItem("game"));
    setGameLocalStorage(localStorageData);
  }

  // Submit user name and score time and
  // Redirect to leaderboard of game setting
  const submitUserHandler = async () => {
    const submitSuccessful = await server.postScore(
      gameLocalStorage.id,
      username,
      timerValue.seconds,
      timerValue.formatted
    );
    if (typeof submitSuccessful === "object") {
      setError(submitSuccessful.errors[0].msg);
    } else {
      navigate(`/leaderboard/${gameLocalStorage.id}`);
    }
  };

  return (
    <>
      <section className="w-full flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-base sm:text-lg text-tertiary/80">
              Characters to find
            </p>
            <div className="flex gap-3 sm:gap-5 items-center">
              {Object.keys(gameLocalStorage).length !== 0 &&
                gameLocalStorage.Character.map((char) => {
                  return (
                    <div
                      key={char.id}
                      className={`relative sm:w-[60px] w-[40px] h-auto rounded-xl border border-last/15 bg-main/40 p-1 overflow-hidden ${
                        char.isFound ? "ring-2 ring-emerald-500/70" : ""
                      }`}
                      title={char.isFound ? "Found" : "Not found"}
                    >
                      <img
                        src={char.url}
                        id={char.id}
                        className={`w-full h-auto rounded-lg ${
                          char.isFound ? "opacity-60 grayscale" : ""
                        }`}
                        alt=""
                        draggable="false"
                      />
                      {char.isFound && (
                        <span className="absolute -top-1 -right-1 grid place-items-center w-5 h-5 rounded-full bg-emerald-500 text-white shadow border border-white/70">
                          <svg
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M9.0 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="self-start sm:self-auto flex items-center gap-3">
            <div className="text-sm sm:text-base text-tertiary/80">
              Time
            </div>
            <div className="sm:p-4 border border-last/15 rounded-2xl sm:px-8 px-3 p-2 text-2xl sm:text-4xl font-extrabold tracking-tight bg-main/60 shadow-[0_14px_45px_rgba(0,0,0,0.10)]">
              {formatClock(timer.getTimeValues())}
            </div>
          </div>
        </div>

        <section className="flex justify-center items-center lg:px-10 sm:py-6 h-full">
        <Photo
          game={gameLocalStorage}
          setGameLocalStorage={setGameLocalStorage}
          setAllCharactersFound={setAllCharactersFound}
        ></Photo>
        </section>
      </section>
      {allCharactersFound && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-last/50 backdrop-blur-sm" />
          <form
            className="relative text-base sm:text-lg border border-last/15 p-5 sm:p-7 flex flex-col items-center gap-3 rounded-3xl w-full max-w-md bg-main shadow-[0_24px_80px_rgba(0,0,0,0.30)]"
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              submitUserHandler();
            }}
          >
            <p className="text-center text-last font-extrabold text-2xl sm:text-3xl tracking-tight">
              Nice work!
            </p>
            <p className="text-center text-tertiary/80">
              Your time is{" "}
              <span className="font-extrabold text-last">
                {timerValue.formatted}
              </span>
            </p>
            <p className="text-sm text-tertiary/70 text-center">
              Enter a name to record your score on the leaderboard.
            </p>
            <div className="w-full flex flex-col gap-2 pt-1">
              <label className="text-sm font-semibold text-last" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="border border-last/15 rounded-2xl px-3 py-2 bg-white/50 focus:bg-white transition-colors"
                ref={inputRef}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Alex"
                autoComplete="nickname"
              />
            </div>
            <button
              className="cursor-pointer py-2 border border-last/15 rounded-2xl px-6 bg-secondary text-last font-bold hover:brightness-105 active:scale-[0.99] transition"
              type="submit"
            >
              Submit score
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </div>
      )}
    </>
  );
};

export default GameStart;
