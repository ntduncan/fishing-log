const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catchSchema = new Schema({
  id: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  fish: {
    type: [
      {
        species: {
          type: String,
          required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        bait: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model("Catch", catchSchema);
