const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        unique: Date.now
    },

    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: true
            },
            type: {
                type: String,
                trim: true,
                required: true
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            },
        }
    ]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
