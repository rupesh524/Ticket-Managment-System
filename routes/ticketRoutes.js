// routes/ticketRoutes.js
import express from 'express';
import auth from '../middleware/authMiddleware.js';
import checkRole from '../middleware/roleMiddleware.js';
import ticketController from '../controllers/ticketController.js';

const router = express.Router();

router.use(auth);

router.post('/', checkRole(['user']), ticketController.create);
router.get('/', checkRole(['agent', 'admin']), ticketController.getAll);
router.get('/my', checkRole(['user']), ticketController.getMy);
router.get('/:id', checkRole(['user', 'agent']), ticketController.getOne);
router.patch('/:id', checkRole(['user', 'agent']), ticketController.update);
router.delete('/:id', checkRole(['user', 'agent']), ticketController.remove);

export default router;
