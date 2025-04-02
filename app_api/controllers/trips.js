const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register the model
const Model = mongoose.model('trips');

// Get: /trips - lists all of the trips
// Regardless of the outcome, the 
// response must include HTML status 
// code and JSON message to the 
// requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return al records
        .exec();

        // Uncomment the folloeing line to show
        // the results of the query on the 
        // console
        //console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err)
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include 
// HTML status code and JSON message to the 
// requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode  }) // Return single record 
        .exec();

        // Uncoment the following line to show the 
        // results of the query on the console
        //console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};