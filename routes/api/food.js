const express = require("express");

const { getAll } = require("../../controllers/food");

const { ctrlWrapper } = require("../../middelwares");

const router = express.Router();

router.route("/:category").get(ctrlWrapper(getAll));

// router.route("/:id").get(ctrlWrapper(getById)).delete(ctrlWrapper(removeById));

module.exports = router;
