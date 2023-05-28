import express from 'express';
import gameController from '../controller/game';
import sessionController from '../controller/session';
import { verifyGameId } from '../middleware/games';
const router = express.Router();
router.use('/:gameId', verifyGameId);
router.post('/', gameController.createGame);
router.get('/:gameId', gameController.getGame);

router.post('/:gameId/sessions', sessionController.createSession);
export default router;
