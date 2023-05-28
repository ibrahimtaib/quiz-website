import express from 'express';
import gameController from '../controller/game';
const router = express.Router();
router.post('/', gameController.createGame);

export default router;
