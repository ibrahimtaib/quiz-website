import express from 'express';
import gameController from '../controller/game';
import { verifyGameId } from '../middleware/games';
const router = express.Router();
router.use('/:gameId', verifyGameId);
router.post('/', gameController.createGame);
router.get('/:gameId', gameController.getGame);

export default router;
