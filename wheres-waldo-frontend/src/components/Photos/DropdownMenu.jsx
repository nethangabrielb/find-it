const DropdownMenu = ({
  coordinates,
  characters,
  sendCoordinatesValidation,
}) => {
  return (
    <div
      className="absolute w-fit h-auto border border-last/20 gap-2 bg-secondary rounded-2xl top-0 left-0 isolate z-50 shadow-[0_18px_55px_rgba(0,0,0,0.22)] overflow-hidden"
      style={{
        transform: `translate(${coordinates.x + 5}px, ${coordinates.y + 5}px)`,
      }}
    >
      {characters.map((char) => {
        return (
          <button
            key={char.id}
            type="button"
            className={`relative sm:w-[56px] w-[36px] border-b border-last/15 last:border-b-0 p-1 bg-main/30 ${
              char.isFound
                ? "cursor-default"
                : "cursor-pointer hover:brightness-105 active:scale-[0.98]"
            }`}
            onClick={!char.isFound ? sendCoordinatesValidation : undefined}
            aria-label={char.isFound ? "Found" : "Not found"}
          >
            <img
              id={char.id}
              className={`w-full h-auto rounded-lg ${
                char.isFound ? "select-none opacity-50 grayscale" : ""
              }`}
              src={char.url}
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
          </button>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
