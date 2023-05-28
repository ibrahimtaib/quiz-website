import express from 'express';
import gameController from '../controller/game';
import sessionController from '../controller/session';
import { verifyGameId } from '../middleware/games';
import { verifySessionId } from '../middleware/session';
const router = express.Router();
router.use('/:gameId', verifyGameId);
router.post('/', gameController.createGame);
router.get('/:gameId', gameController.getGame);

router.post('/:gameId/sessions', sessionController.createSession);

router.use('/:gameId/sessions/:sessionId', verifySessionId);
router.post(
  '/:gameId/sessions/:sessionId/',
  sessionController.answerCurrentQuestion
);
export default router;
