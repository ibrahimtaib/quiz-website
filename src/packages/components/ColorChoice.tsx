import { MouseEvent, useState } from 'react';
import style from 'styles/colorChoice.module.css';
import { ColorChoiceProps } from 'types/colors';

function ColorChoice({
  className,
  colorScheme,
  onClick,
  clicked
}: ColorChoiceProps) {
  const [buttonClicked, setButtonClicked] = useState(clicked);

  /* updating button with clicked prop */
  if (!clicked && buttonClicked) {
    setButtonClicked(false);
  }
  const colorStyle = {
    backgroundColor: colorScheme.primaryColor,
    filter: buttonClicked ? 'brightness(85%)' : ''
  };
  const onClickFunction = (e: MouseEvent) => {
    e.preventDefault();
    setButtonClicked(true);
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className={[style.colorChoice, className].join(' ')}
      style={colorStyle}
      onClick={onClickFunction}
    />
  );
}

export default ColorChoice;
