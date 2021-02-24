const db = require("../models");

module.exports = function (app) {

    // get previous workout info
    app.get("/api/workouts", (req, res) => {
        db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                },
            },
        ], (error, data) => {
            console.log();
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });

    });

    // create new workout entry
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body, (error, data) => {
            if (error) {
                res.send(error);
                } else {
                    res.send(data);
                }
        });
    });

    // add movement to exisiting workout
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.update(req.params.id,
            { $push: { exercises: req.body } },
            (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.json(data);
                }
            }
        );
    });

    // view stats
    app.get("api/workouts/range", (req, res) => {
        db.Workout.aggregate([
            {
                $addFields: { totalDuration: { $sum: "e$xercises.duration" } }
            }
        ])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

};
