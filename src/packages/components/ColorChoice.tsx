'use client';
import { MouseEvent, useMemo, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
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
  if (clicked !== true && buttonClicked) {
    setButtonClicked(false);
  }
  const colorStyle = useMemo(() => {
    return {
      backgroundColor: colorScheme.primaryColor
    };
  }, [colorScheme.primaryColor]);
  const onClickFunction = (e: MouseEvent) => {
    e.preventDefault();
    setButtonClicked(true);
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className={[style.colorChoiceContainer, className].join(' ').trim()}>
      <button
        type="button"
        className={[
          style.colorChoice,
          buttonClicked === true ? style.clicked : ''
        ]
          .join(' ')
          .trim()}
        style={colorStyle}
        onClick={onClickFunction}
        disabled={buttonClicked}
      >
        {buttonClicked && <AiOutlineCheck color="white" size={23} />}
      </button>
    </div>
  );
}

export default ColorChoice;
