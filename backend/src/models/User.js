const { Schema, model } = require('mongoose');

const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  email_verified: { type: Boolean, default: true},
  kyc_verified: { type: Boolean, default: true},
  role: { type: String, default: "subscriber"},
  createdAt: { type: Date, default: Date.now },
});

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);
