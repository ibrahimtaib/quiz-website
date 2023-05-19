import { MouseEvent, useEffect, useRef, useState } from 'react';
import style from 'styles/lobby.module.css';

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
    <button
      ref={ref}
      className={[style.colorButton, opened ? style.openedButton : '']
        .join(' ')
        .trim()}
      onClick={handleClick}
    />
  );
}

export default LobbyColorPicker;
