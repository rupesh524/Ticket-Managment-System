import Ticket from '../models/Ticket.js'

const ticketController = {
  create: async (req, res) => {
    const ticket = await Ticket.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(ticket);
  },

  getAll: async (req, res) => {
    const { search = '', page = 1, limit = 10 } = req.query;
    const query = { title: new RegExp(search, 'i') };
    const tickets = await Ticket.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(tickets);
  },

  getMy: async (req, res) => {
    const tickets = await Ticket.find({ createdBy: req.user._id });
    res.json(tickets);
  },

  getOne: async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Not found' });
    res.json(ticket);
  },

  update: async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Not found' });

    if (
      req.user.role === 'user' &&
      ticket.createdBy.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    Object.assign(ticket, req.body);
    await ticket.save();
    res.json(ticket);
  },

  remove: async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Not found' });

    if (
      req.user.role === 'user' &&
      ticket.createdBy.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await ticket.remove();
    res.json({ message: 'Deleted' });
  }
};

export default ticketController;
