const faker = require('faker');

const db = require('../config/connection');
const { Workout, User } = require('../models');

db.once('open', async () => {
  await Workout.deleteMany({});
  await User.deleteMany({});

  // create workout users
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create workout sessions
  for (let i = 0; i < 100; i += 1) {

    const exercise = {
      muscle: faker.lorem.words(Math.round(Math.random() * 20) + 1),
      name: faker.lorem.words(Math.round(Math.random() * 20) + 1),
      weight: Math.round(Math.random() * 300) + 1,
      reps: Math.round(Math.random() * 20) + 1,
      sets:Math.round(Math.random() * 5) + 1,
      duration: Math.round(Math.random() * 20) + 1
    }
    
    const day = new Date();
    const workout = {day, exercise};

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];
    workout.username = username;
    const { _id } = await Workout.create(workout);
    await User.findOneAndUpdate(
      { username: username },
      {
        $addToSet: {
          thoughts: _id,
        },
      }
    );
  }

  console.log('all done!');
  process.exit(0);
});
