const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitnessSchema = new Schema({

    day: {
        type: Date,
        unique: Date.now
    },

    exercises: [
        {
        name: String,
        type: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number
        },
    ]

});

const Fitness = mongoose.model("Fitness", FitnessSchema);

module.exports = Fitness;
