'use client';
import Card from 'components/Card';
import ColorChoice from 'components/ColorChoice';
import ProfilePicture from 'components/ProfilePicture';
import Question from 'components/Question';
import { useState } from 'react';
import style from 'styles/joingame.module.css';
import { COLORS, ColorScheme } from 'types/colors';
/* questions page */
function Page() {
  const [userColor, setUserColor] = useState<ColorScheme>(COLORS.RED);
  const [username, setUsername] = useState('');
  const textStyle = { color: userColor.tertiaryColor };
  console.log(username);
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.colorContainer}>
          {Object.values(COLORS).map(color => (
            <ColorChoice
              key={color.name}
              colorScheme={color}
              className={style.colorChoice}
              clicked={color === userColor}
              onClick={() => setUserColor(color)}
            />
          ))}
        </div>
        <Card colorScheme={userColor} className={style.card}>
          <ProfilePicture
            colorScheme={userColor}
            className={style.profilePicture}
          />
          <input
            type={'text'}
            placeholder={'Username'}
            onChange={e => setUsername(e.target.value)}
            className={style.username}
          />
        </Card>
      </div>
      <button
        className={style.play}
        style={{ backgroundColor: userColor.secondaryColor }}
      >
        <span className={style.playText} style={textStyle}>
          Join
        </span>
        {/* <BsArrowRightShort className={style.playArrow} style={textStyle} /> */}
      </button>
    </div>
  );
  return <Question></Question>;
}

export default Page;
