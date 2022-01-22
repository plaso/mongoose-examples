const mongoose = require("mongoose")

const bootcamp = new mongoose.Schema({
  name: {
    type: String,
    enum: ["Web development", "UX/UI"],
    required: true
  },
  campus: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Bootcamp = mongoose.model("Bootcamp", bootcamp)

module.exports = Bootcamp