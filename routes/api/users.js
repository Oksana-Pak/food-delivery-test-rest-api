const express = require("express");
const { validation, ctrlWrapper } = require("../../middelwares");
const { userJoiSchema } = require("../../schemas");
const { addOrder } = require("../../controllers/users");

const router = express.Router();

router.route("/").post(validation(userJoiSchema), ctrlWrapper(addOrder));

module.exports = router;
