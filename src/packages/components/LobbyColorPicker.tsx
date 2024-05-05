'use client';
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import style from 'styles/lobbycolorpicker.module.css';
import { COLORS, ColorScheme } from 'types/colors';
import { LobbyColorPickerProps } from 'types/lobbycolorpicker';
import ColorChoice from './ColorChoice';
function LobbyColorPicker({
  userColor,
  setUserColor,
  takenColors
}: LobbyColorPickerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const setUserColorCallback = useCallback(
    (e: ColorScheme) => setUserColor(e),
    []
  );
  const [opened, setOpened] = useState(false);
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpened(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        ref.current &&
        ref.current != event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpened(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={[!opened ? style.colorButton : style.opened].join(' ').trim()}
      onClick={handleClick}
    >
      {opened ? (
        Object.values(COLORS).map(e => (
          <ColorChoice
            className={style.colorChoice}
            key={e.name}
            colorScheme={e}
            clicked={takenColors && takenColors.includes(e)}
            onClick={() => setUserColorCallback(e)}
          />
        ))
      ) : (
        <BsPencil size={20} className={style.pencil} />
      )}
    </div>
  );
}

export default LobbyColorPicker;
