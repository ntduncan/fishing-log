const Catch = require('../models/catch');


const getCatches = (req, res, next) => {
    Catch.find()
    .then(catches => {
      console.log(catches);
      res.json(catches);
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
}

const getCatch = (req, res, next) => {
    const catchId = req.params.catchId;
    Catch.findById(catchId)
      .then(catchData => {
        res.json(catchData)
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
}

const createCatch = (req, res, next) => {
    const bait = req.body.bait;
    const location = req.body.location;
    const img = req.body.img;
    const length = req.body.length;
    const date = req.body.date;
    const species = req.body.species;

    console.log(req.body)
 
    const catchObj = new Catch({
       bait: bait,
       location: location,
       img: img,
       length: length,
       date: date,
       species: species
    });
 
    catchObj
       .save()
       .then((result) => {
          console.log(result)
          res.json({ message: "Catch was saved", id: result.id });
       })
       .catch((err) => {
          console.log(err); //may want to update this later
       });
}

const updateCatch = (req, res, next) => {
    return;
}

const deleteCatch = (req, res, next) => {
    return;
}

module.exports = {
    getCatch,
    getCatches,
    createCatch,
    updateCatch,
    deleteCatch,
}