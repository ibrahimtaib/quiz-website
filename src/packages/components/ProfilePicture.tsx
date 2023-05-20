import style from 'styles/profilepicture.module.css';
import { ColorScheme } from 'types/colors';

function ProfilePicture({ colorScheme }: { colorScheme: ColorScheme }) {
  const styles = {
    content: {
      backgroundColor: colorScheme.secondaryColor
    },
    container: {
      backgroundColor: colorScheme.tertiaryColor
    }
  };
  return (
    <div className={style.container} style={styles.container}>
      <section className={style.head} style={styles.content} />
      <section className={style.body} style={styles.content} />
    </div>
  );
}

export default ProfilePicture;
