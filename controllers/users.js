const { User } = require("../models");

const addOrder = async (req, res) => {
  const { name, email, phone, address } = req.body;

  const newUser = new User({
    name,
    email,
    phone,
    address,
  });

  await newUser.save();

  res.status(201).json({
    user: {
      name,
      email,
      phone,
      address,
    },
  });
};

module.exports = {
  addOrder,
};
