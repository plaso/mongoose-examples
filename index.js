const mongoose = require("mongoose")

require("./config/db.config");

const Student = require("./models/Student.model");
const Bootcamp = require("./models/Bootcamp.model");

const students = [
  {
    name: 'Manu',
    email: 'manu@google.com',
    age: 23
  },
  {
    name: 'Pepe',
    email: 'pepe@google.com',
    age: 23
  },
  {
    name: 'Manolo',
    email: 'Manolo@google.com',
    age: 23
  },
  {
    name: 'María',
    email: 'Maria@google.com',
    age: 23
  },
]

const bootcamps = [
  {
    name: "Web development",
    campus: "Madrid"
  },
  {
    name: "UX/UI",
    campus: "Madrid"
  },
]

// const student = new Student(studentData)

// student.save()
//   .then(createdStudent => console.log(createdStudent))
//   .catch(err => console.log(err))


// Student.create(students)
//   .then(createdStudents => console.log(createdStudents))
//   .catch(err => console.log(err))


// Promise.all([Student.create(students), Bootcamp.create(bootcamps)])
//   .then((result) => {
//     const createdStudents = result[0]
//     const createdBootcamps = result[1]

//     console.log(createdStudents)
//     console.log(createdBootcamps)
//   })
//   .catch(err => console.log(err))

mongoose.connection.once('open', () => {
  mongoose.connection.db.dropDatabase()
    .then(() => console.log('Database has been cleared')) 
    .then(() => {
      return Promise.all([Student.create(students), Bootcamp.create(bootcamps)])
    })
    .then(result => {
      console.log(result)
      return Student.findOneAndUpdate({ name: "Manolo" }, { age: 27 }, { new: true })
    })
    .then(student => {
      console.log(`Student ${student.name} has been updated with age ${student.age}`)

      return Student.findOneAndDelete({ name: 'Manolo' })
    })
    .then(deletedStudent => console.log(`Student ${deletedStudent.name} has been deleted`))
    .then(() => {
      return Student.countDocuments()
    })
    .then(numStudents => console.log(`${numStudents} students have been finally created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})

// Student.findOneAndDelete("61ebe4ef9712bfb8532e56d6")
//   .then(student => console.log(student))
//   .catch(err => console.log(err))