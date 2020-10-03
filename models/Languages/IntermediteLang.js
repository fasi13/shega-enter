const mongoose = require('mongoose');
const IntermediateLangSchema = new mongoose.Schema({
    LangsID: {
        type: Number
      },  
    vocabulary : [
        {
            english : {
                type:String,
                require: true
            },
            amaharic : {
                type:String,
                require:true
            },
            sound : {
                type:String,
                require:false,
            }     
        }
    ],
    grammer_ : [
        {
            grammer : {
                type:String,
                require: true
            },
            form : {
                type:String,
                require:true
            },
            example : {
                type:String,
                require:false,
            }     
        }
    ],
    tutorialVedio : [
        {
            vedioLink : {
                type:String,
                require: true
            }    
        }
    ],
    exercises :  [
        {
            question : {
                type:String,
                require:true
            },
            answer: {
                type:String,
                require: true
            }
        }
        
    ]
});

module.exports =mongoose.model('IntermediateLang', IntermediateLangSchema);