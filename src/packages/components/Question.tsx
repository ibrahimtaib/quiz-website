'use client';
import style from 'styles/question.module.css';
import { ColorScheme, FALSE, TRUE } from 'types/colors';
import { QuestionType } from 'types/question';
import Card from './Card';
const white: ColorScheme = {
  primaryColor: '#ffffff',
  name: '',
  secondaryColor: '',
  tertiaryColor: '',
  quaternaryColor: ''
};
function Question({ questionType }: { questionType?: QuestionType }) {
  // TODO turn these into components
  return (
    <div className={style.container}>
      <Card className={style.question} colorScheme={white} horizontal={true}>
        Which unlockable character in Super Smash Bros. For Wii U and 3DS does
        not have to be fought to be unlocked?
      </Card>
      <div className={style.bianswers}>
        <Card colorScheme={TRUE} className={style.bianswer}></Card>
        <Card colorScheme={FALSE} className={style.bianswer}></Card>
      </div>
      {/* <div className={style.quadrupleanswers}>
        <Card colorScheme={FIRST_QUESTION} className={style.quadrupleanswer}>
          Test
        </Card>
        <Card colorScheme={SECOND_QUESTION} className={style.quadrupleanswer}>
          Second
        </Card>
        <Card colorScheme={THIRD_QUESTION} className={style.quadrupleanswer}>
          Third
        </Card>
        <Card colorScheme={FOURTH_QUESTION} className={style.quadrupleanswer}>
          Fourth
        </Card>
      </div> */}
    </div>
  );
}

export default Question;
