'use client';
import Card from 'components/Card';
import ColorChoice from 'components/ColorChoice';
import ProfilePicture from 'components/ProfilePicture';
import Question from 'components/Question';
import { useState } from 'react';
import style from 'styles/joingame.module.css';
import { COLORS } from 'types/colors';
/* questions page */
function Page() {
  const [userColor, setUserColor] = useState(COLORS.RED);
  const [username, setUsername] = useState('');
  console.log(username);
  return (
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
  );
  return <Question></Question>;
}

export default Page;
