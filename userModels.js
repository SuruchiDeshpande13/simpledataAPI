const mongoose = require('mongoose')

const userModelsSchema = new mongoose.Schema({
    name:{ 
    type : String,
    required :true
    },
    salary:{
        type :Number,
        required :true
    }

})
module.exports = mongoose.model('user',userModelsSchema)
