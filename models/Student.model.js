const mongoose = require("mongoose");
const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const student = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Field name is required for a student"],
  },
  email: {
    type: String,
    required: [true, "Field email is required for a student"],
    unique: true,
    lowercase: true,
    match: [EMAIL_PATTERN, "Email does not match the pattern"]
  },
  age: {
    type: Number,
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

const Student = mongoose.model('Student', student);

module.exports = Student