import Card from 'components/Card';
import style from 'styles/lobby.module.css';
function Lobby() {
  return (
    <div className={style.lobby}>
      <Card className={style.card1} />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Lobby;
