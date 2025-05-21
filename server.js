import app from './app.js';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(` Database connected !! Server running on port ${process.env.PORT}`)
    );
    
  })
  .catch(err => console.error('DB connection failed:', err));
