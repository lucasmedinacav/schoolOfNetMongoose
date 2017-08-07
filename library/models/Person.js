var mongoose = require("mongoose"); // VOU USAR O MONGOOSE DE NOVO

var Person = mongoose.Schema({ //PRA CRIAR UM DOCUMENTO DE MONGODB OU SCHEMA DO MONGOOSE
    name: {
        firtsname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
    },
    age: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//PODEMOS TER TYPE REQUIRED E DEFAULT

module.exports = mongoose.model('Person', Person); // NOME DOCUMENTO X SCHEMA