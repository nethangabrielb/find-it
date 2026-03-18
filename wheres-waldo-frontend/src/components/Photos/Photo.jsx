import DropdownMenu from "./DropdownMenu";
import server from "../../services/API";
import { useState, useRef } from "react";

const Photo = ({ game, setGameLocalStorage, setAllCharactersFound }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState({
    x: null,
    y: null,
  });
  const [isCoordinateCorrect, setIsCoordinateCorrect] = useState(null);
  const photoRef = useRef(null);
  const audioRef = useRef(null);

  const handlePhotoClick = (e) => {
    if (openDropdown) {
      setOpenDropdown(false);
    } else {
      setOpenDropdown(true);
    }

    setClickCoordinates({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const sendCoordinatesValidation = async (e) => {
    // Get the instrinsic and the rendered w and h of image
    const photo = photoRef.current;
    const renderedVal = { w: photo.clientWidth, h: photo.clientHeight };
    const naturalVal = { w: photo.naturalWidth, h: photo.naturalHeight };

    // Divide click coordinates with rendered coordinates
    // and multiply with natural values to normalize coordinates
    const normalizedX = (clickCoordinates.x / renderedVal.w) * naturalVal.w;
    const normalizedY = (clickCoordinates.y / renderedVal.h) * naturalVal.h;

    const normalizedCoordinates = {
      x: normalizedX,
      y: normalizedY,
    };

    // Validate result
    const validationResult = await server.validateCoordinates(
      normalizedCoordinates,
      e.target.id,
      game.id
    );

    if (validationResult) {
      const updatedCharactersStatus = game.Character.map((char) => {
        if (char.id == e.target.id) {
          return { ...char, isFound: true };
        } else {
          return char;
        }
      });
      setGameLocalStorage({
        ...game,
        Character: updatedCharactersStatus,
      });
      setOpenDropdown(false);
      setIsCoordinateCorrect(true);
      setTimeout(() => {
        setIsCoordinateCorrect(null);
      }, 1000);
      audioRef.current.play();

      // Check if all characters are found
      const isAllFound = updatedCharactersStatus.every((char) => char.isFound);
      if (isAllFound) {
        setAllCharactersFound(true);
      }
    } else {
      setIsCoordinateCorrect(false);
      setTimeout(() => {
        setIsCoordinateCorrect(null);
      }, 1000);
      audioRef.current.play();
    }
  };

  return (
    <div className="relative h-full w-full flex justify-center">
      <img
        src={game.url}
        alt="Where's Waldo photo"
        onClick={handlePhotoClick}
        className="w-full h-full max-w-[1400px] rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.22)] border border-last/15 bg-main"
        ref={photoRef}
      />
      {isCoordinateCorrect !== null && clickCoordinates.x !== null && (
        <div
          className="pointer-events-none absolute top-0 left-0 z-40"
          style={{
            transform: `translate(${clickCoordinates.x}px, ${clickCoordinates.y}px)`,
          }}
        >
          <div
            className={`-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 shadow-sm ${
              isCoordinateCorrect
                ? "border-emerald-400/90 bg-emerald-400/15"
                : "border-rose-400/90 bg-rose-400/15"
            }`}
          />
          <div
            className={`mt-2 -translate-x-1/2 px-2 py-1 rounded-full text-xs font-bold border shadow-sm backdrop-blur ${
              isCoordinateCorrect
                ? "bg-emerald-500/20 text-emerald-50 border-emerald-300/30"
                : "bg-rose-500/20 text-rose-50 border-rose-300/30"
            }`}
          >
            {isCoordinateCorrect ? "Correct" : "Try again"}
          </div>
        </div>
      )}
      {openDropdown && (
        <DropdownMenu
          coordinates={clickCoordinates}
          characters={game.Character}
          sendCoordinatesValidation={sendCoordinatesValidation}
          setIsCoordinateCorrect={setIsCoordinateCorrect}
        ></DropdownMenu>
      )}
      {isCoordinateCorrect ? (
        <audio src="correct.mp3" ref={audioRef} autoPlay></audio>
      ) : (
        isCoordinateCorrect === false && (
          <audio src="wrong.mp3" ref={audioRef} autoPlay></audio>
        )
      )}
    </div>
  );
};

export default Photo;
