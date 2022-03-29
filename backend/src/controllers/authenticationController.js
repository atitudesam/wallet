const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');

function createToken(user) {
  return jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
}

const Authentication = {};

Authentication.login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(401).json({ message: info.message });
      return;
    }
    res.status(200).json({ token: createToken(user) });
  })(req, res, next);
};

Authentication.register = async (req, res, next) => {
  try {
    const { name,email, password } = req.body;
    if (!name) {
      return res.status(500).json({
        message: 'Name must be provided',
      });
    }
    if (!name || !email || !password) {
      return res.status(500).json({
        message: 'Email and password must be provided',
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(422).json({ message: 'Email is already in use' });
    }
    const newUser = new User({
      name,
      email,
      password,
    });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    res.status(200).json({ token: createToken(newUser) });
  } catch (error) {
    return next(error);
  }
};

module.exports = Authentication;
