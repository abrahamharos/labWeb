// Importar Schema, model
const {Schema, model} = require('mongoose')

// 2 Crear el modelo
var postsSchema = new Schema({
    title  : String,
    author : String,
    post_date : {type: Date, default: Date.now},
    post_data : String
})

// 3 Permitir que se pueda exportar
module.exports = model('posts', postsSchema)