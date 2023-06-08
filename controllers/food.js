const { Food } = require("../models");
const { HttpError } = require("../utils");

const getAll = async (req, res) => {
  const { page, limit } = req.query;
  const categoryFirstLetter = req.params.category.charAt(0).toUpperCase();
  const categoryNextLetters = req.params.category.slice(1);
  const category = categoryFirstLetter + categoryNextLetters;

  const paginationPage = +page || 1;
  const paginationLimit = +limit || 9;
  const skip = (paginationPage - 1) * paginationLimit;
  console.log(category);
  const dishList = await Food.find({ category })
    .skip(skip)
    .limit(paginationLimit);

  if (!dishList) {
    throw new HttpError(404, "Dishes not found");
  }

  const dishCount = await Food.find({ category }).count();

  if (!dishCount) {
    throw new HttpError(404, "Dishes not found");
  }

  res.status(200).json({ total: dishCount, dishList });
};

module.exports = {
  getAll,
};
