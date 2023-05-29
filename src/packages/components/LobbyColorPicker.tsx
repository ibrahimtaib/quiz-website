'use client';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import style from 'styles/lobbycolorpicker.module.css';
import { COLORS } from 'types/colors';
import { LobbyColorPickerProps } from 'types/lobbycolorpicker';
import ColorChoice from './ColorChoice';
function LobbyColorPicker({
  userColor,
  setUserColor,
  takenColors
}: LobbyColorPickerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setOpened(true);
  };
  useEffect(() => {
    console.log('in use effect!');
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
            clicked={
              e === userColor || (takenColors && takenColors.includes(e))
            }
            onClick={() => setUserColor(e)}
          />
        ))
      ) : (
        <BsPencil size={20} className={style.pencil} />
      )}
    </div>
  );
}

export default LobbyColorPicker;
