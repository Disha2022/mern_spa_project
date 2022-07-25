const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    exercises: [
        {
            muscle: {
                type: String,
                unique: false
            },
            name: {
                type: String
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            duration: {
                type: Number
            }
        },
    ]
});


const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;
