import { MouseEvent, useEffect, useRef, useState } from 'react';
import style from 'styles/lobbycolorpicker.module.css';
import { COLORS } from 'types/colors';
import ColorChoice from './ColorChoice';

function LobbyColorPicker() {
  const ref = useRef<HTMLButtonElement>(null);
  const [opened, setOpened] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setOpened(true);
  };
  useEffect(() => {
    console.log('in use effect!');
    const handleClickOutside = (event: Event) => {
      if (ref.current && ref.current != event.target) {
        setOpened(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className={style.opened}>
      <button
        ref={ref}
        className={[style.colorButton, style.openedButton].join(' ').trim()}
        onClick={handleClick}
      />
      {Object.values(COLORS).map(e => (
        <ColorChoice
          className={style.colorChoice}
          key={e.name}
          colorScheme={e}
        />
      ))}
    </div>
  );
}

export default LobbyColorPicker;
