const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    JokesID: {
        type: Number
      },   
    SelectedJokes:[
        {
            title :{
                type : String,
                require : true
            },
            JokesBody: {
                type : String,
                require: true
            }
        }
    ],
    FamilyJokes: [
        {
            title: {
                type : String,
                require: true
            },
            JokesBody: {
                type : String,
                require:true
            }

        }
    ],
    OfficeJokes : [
        {
            title : {
                type : String,
                require : true
            },
            JokesBody : {
                type : String,
                require : true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('jokes', JokesSchema);