// routes/adminRoutes.js
import express from 'express';
import auth from '../middleware/authMiddleware.js';
import checkRole from '../middleware/roleMiddleware.js';
import adminController from '../controllers/adminController.js';

const router = express.Router();
router.use(auth, checkRole(['admin']));

const { getUsers, changeRole, toggleStatus } = adminController;

router.get('/users', getUsers);
router.patch('/users/:id/role', changeRole);
router.patch('/users/:id/status', toggleStatus);

export default router;
