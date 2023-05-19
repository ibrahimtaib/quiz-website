import { MouseEvent, useMemo, useState } from 'react';
import style from 'styles/colorChoice.module.css';
import { ColorChoiceProps } from 'types/colors';

function ColorChoice({
  className,
  colorScheme,
  onClick,
  clicked
}: ColorChoiceProps) {
  const [buttonClicked, setButtonClicked] = useState(
    clicked !== undefined ? clicked : false
  );

  /* updating button with clicked prop */
  if (clicked === false && buttonClicked) {
    setButtonClicked(false);
  }
  const colorStyle = useMemo(() => {
    return {
      backgroundColor: colorScheme.primaryColor,
      filter: buttonClicked === true ? 'brightness(50%)' : ''
    };
  }, [buttonClicked, colorScheme.primaryColor]);
  const onClickFunction = (e: MouseEvent) => {
    e.preventDefault();
    setButtonClicked(true);
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className={[style.colorChoiceContainer, className].join(' ')}>
      <button
        className={style.colorChoice}
        style={colorStyle}
        onClick={onClickFunction}
      />
    </div>
  );
}

export default ColorChoice;
