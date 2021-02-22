const mongoose = require("mongoose");

const schema = mongoose.schema;

const fitnessSchema = new schema ({

    day: {
        type: Date,
        unique: Date.now
    },

    exercises: [
        {
            name: String,
            time: Number,
            // double-check required values
        }
    ]
});

const fitness = mongoose.model("fitness", fitnessSchema);

module.exports = fitness;
