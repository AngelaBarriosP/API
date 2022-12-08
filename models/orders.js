const mongoose = require('mongoose'); 
const Joi = require ("Joi");
const Schema = mongoose.Schema;


var orderSchema = new mongoose.Schema({
    
    fecha:{
        type:Date,
        required:true
    },
    hora:{
        type:Date,
        required:true
    },
    ancho:{
        type:Number,
        required:true
    },
    largo:{
        type:Number,
        required:true
    },
    alto:{
        type:Number,
        required:true
    },
    peso:{
        type:Number,
        required:true
    },
    mercDel:{
        type:Boolean,
        required:true,
        default:false
    },
    direcReco:{
        type:String,
        required:true
    },
    ciudadReco:{
        type:String,
        required:true
    },
    nombreDest:{
        type:String,
        required:true
    },
    cedulaNitDes:{
        type:String,
        required:true
    },
    direcEntr:{
        type:String,
        required:true
    },
    ciudadEntr:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        default:"Guardado"

    },
    userActId:{
        type: String,
    
    },
});

module.exports = mongoose.model("orders", orderSchema)

const dataOrder = mongoose.model('dataOrder', orderSchema);



const validator = (data)=> {
    const schema = Joi.object({
        fecha:Joi.Date().required(),
        hora:Joi.Date().required(),
        ancho:Joi.string().required(),
        largo:Joi.string().required(),
        alto:Joi.string().required(),
        peso:Joi.string().required(),
        mercDel:Joi.boolean().required(),
        direcReco:Joi.string().required(),
        ciudadReco:Joi.string().required(),
        nombreDest:Joi.string().required(),
        cedulaNitDes:Joi.string().required(),
        direcEntr:Joi.string().required(),
        ciudadEntr:Joi.string().required(),
    })
    return schema.validate(data)

}

module.exports = {validator, dataOrder};

