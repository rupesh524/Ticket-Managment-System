
import User from '../models/User.js';

const userController = {
  getUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },

  changeRole: async (req, res) => {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: req.body.role },
      { new: true }
    );
    res.json(user);
  },

  toggleStatus: async (req, res) => {
    const user = await User.findById(req.params.id);
    user.isActive = !user.isActive;
    await user.save();
    res.json(user);
  }
};

export default userController;
