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
          <img
            id={char.id}
            className={`${
              char.isFound
                ? "select-none opacity-50 cursor-default grayscale"
                : "cursor-pointer hover:brightness-105 active:scale-[0.98]"
            } sm:w-[56px] w-[36px] border-b border-last/15 last:border-b-0 p-1 bg-main/30`}
            src={char.url}
            alt=""
            key={char.id}
            onClick={!char.isFound ? sendCoordinatesValidation : undefined}
          ></img>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
