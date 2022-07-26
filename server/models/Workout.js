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
    exercises: {
        muscle: {
            type: String,
            unique: false
        },
        name: {
            type: String
        },
        weight: {
            type: String
        },
        reps: {
            type: String
        },
        sets: {
            type: String
        },
        duration: {
            type: String
        }
    }
});


const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;
