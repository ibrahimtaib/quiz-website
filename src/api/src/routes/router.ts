import express from 'express';
import gameController from '../controller/game';

const router = express.Router();
router.get('/', gameController.createGame);
module.exports = router;
