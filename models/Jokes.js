const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    JokesID: {
        type: Number
      },   
    SelectedJokes:[
        {
            photo_A: {
                type : String,
                default:""
            },
            photo_B: {
                type : String,
                default:""
            },
            photo_A_: {
                type : String,
                default:""
            },
            photo_B_: {
                type : String,
                default:""
            },
            photo_A__: {
                type : String,
                default:""
            },
            photo_B__: {
                type : String,
                default:""
            },
            photo_A___: {
                type : String,
                default:""
            },
            photo_B___: {
                type : String,
                default:""
            },
            body_A: {
                type : String,
                require: true
            },
            body_B: {
                type : String,
                require: true
            },
            body_A_: {
                type : String,
                require: true
            },
            body_B_: {
                type : String,
                require: true
            },
            body_A__: {
                type : String,
                require: true
            },
            body_B__: {
                type : String,
                require: true
            },
            body_A___: {
                type : String,
                require: true
            },
            body_B___: {
                type : String,
                require: true
            }
        }
    ],
    FamilyJokes: [
        {
            photo_A: {
                type : String,
                default:""
            },
            photo_B: {
                type : String,
                default:""
            },
            photo_A_: {
                type : String,
                default:""
            },
            photo_B_: {
                type : String,
                default:""
            },
            photo_A__: {
                type : String,
                default:""
            },
            photo_B__: {
                type : String,
                default:""
            },
            photo_A___: {
                type : String,
                default:""
            },
            photo_B___: {
                type : String,
                default:""
            },
            body_A: {
                type : String,
                require: true
            },
            body_B: {
                type : String,
                require: true
            },
            body_A_: {
                type : String,
                require: true
            },
            body_B_: {
                type : String,
                require: true
            },
            body_A__: {
                type : String,
                require: true
            },
            body_B__: {
                type : String,
                require: true
            },
            body_A___: {
                type : String,
                require: true
            },
            body_B___: {
                type : String,
                require: true
            }

        }
    ],
    OfficeJokes : [
        {
            photo_A: {
                type : String,
                default:""
            },
            photo_B: {
                type : String,
                default:""
            },
            photo_A_: {
                type : String,
                default:""
            },
            photo_B_: {
                type : String,
                default:""
            },
            photo_A__: {
                type : String,
                default:""
            },
            photo_B__: {
                type : String,
                default:""
            },
            photo_A___: {
                type : String,
                default:""
            },
            photo_B___: {
                type : String,
                default:""
            },
            body_A: {
                type : String,
                require: true
            },
            body_B: {
                type : String,
                require: true
            },
            body_A_: {
                type : String,
                require: true
            },
            body_B_: {
                type : String,
                require: true
            },
            body_A__: {
                type : String,
                require: true
            },
            body_B__: {
                type : String,
                require: true
            },
            body_A___: {
                type : String,
                require: true
            },
            body_B___: {
                type : String,
                require: true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('jokes', JokesSchema);