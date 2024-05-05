'use client';
import { MouseEvent, useMemo } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import style from 'styles/colorChoice.module.css';
import { ColorChoiceProps } from 'types/colors';
function ColorChoice({
  className,
  colorScheme,
  onClick,
  clicked
}: ColorChoiceProps) {
  const colorStyle = useMemo(() => {
    return {
      backgroundColor: colorScheme.primaryColor
    };
  }, [colorScheme.primaryColor]);
  const onClickFunction = (e: MouseEvent) => {
    console.log('clicked');
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className={[style.colorChoiceContainer, className].join(' ').trim()}>
      <button
        type="button"
        className={[style.colorChoice, clicked ? style.clicked : '']
          .join(' ')
          .trim()}
        style={colorStyle}
        onClick={onClickFunction}
        disabled={clicked}
      >
        {clicked && (
          <AiOutlineCheck color="white" className={style.check} size={23} />
        )}
      </button>
    </div>
  );
}

export default ColorChoice;
