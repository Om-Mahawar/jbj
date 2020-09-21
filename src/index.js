const express = require('express');
require('./db/mongoose.js');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Server is currently under maintenance');
//     next();
// });

// const multer = require('multer');
// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a word document'));
//     }

//     cb(undefined, true);
//   },
// });

// app.post(
//   '/upload',
//   upload.single('upload'),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisisnodecourse', {
//     expiresIn: '1 day',
//   });
//   console.log(token);

//   const data = jwt.verify(token, 'thisisnodecourse');
//   console.log(data);
// };

// myFunction();

// const pet = {
//   name: 'Hal',
// };

// pet.toJSON = function () {
//   return {};
// };

// console.log(JSON.stringify(pet));

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//   // const task = await Task.findById('5f5bc0510533ad2b4496c89c');
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById('5f5bbf8bea17091fecf3eb6b');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// };

// main();
