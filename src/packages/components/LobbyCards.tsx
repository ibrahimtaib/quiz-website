import style from 'styles/lobbycards.module.css';
import { COLORS, ColorScheme } from 'types/colors';
import Card from './Card';
import ProfilePicture from './ProfilePicture';

function LobbyCards({ userColor }: { userColor: ColorScheme }) {
  const styles = [
    style.card1,
    style.card2,
    style.card3,
    style.card4,
    style.card5
  ];
  const colors = [
    COLORS.PURPLE,
    COLORS.BLUE,
    COLORS.RED,
    COLORS.GREEN,
    userColor
  ];
  console.log(userColor);
  return (
    <div className={style.cardContainer}>
      {styles.map((s, index) => {
        return (
          <Card
            key={s}
            className={[style.card, s].join(' ').trim()}
            colorScheme={colors[index]}
          >
            <ProfilePicture
              colorScheme={colors[index]}
              className={style.profilePicture}
            />
            <span className={style.username}>Username</span>
          </Card>
        );
      })}
      ;
    </div>
  );
}

export default LobbyCards;
