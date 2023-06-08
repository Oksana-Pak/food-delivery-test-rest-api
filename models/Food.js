const { Schema, model } = require("mongoose");

const foodSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Add title"],
    },
    category: {
      type: String,
      required: [true, "Add a category"],
    },

    preview: {
      type: String,
      default: null,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false, timestamps: true }
);

const Food = model("food", foodSchema);

module.exports = Food;
