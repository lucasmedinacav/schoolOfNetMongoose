var express = require("express"); //VOU USAR EXPRESS PORQUE O EXPRESS SERVE PRINCIPALMENTE PARA RECEBER CHAMADAS HTTP BATENDO EM SUAS ROTAS
var router = express.Router(); //VOU DISPONIBILIZAR ROTAS COM O EXPRESS
var Person = require("./../models/Person"); //VOU USAR O SCHEMA PERSON DO MONGOSE

//findAll
router.get('/', function(req, res) {
    Person.find({}, function(err, people) {
        if (err) {
            return;
        }
        res.send(people);
    });
});

//findById
router.get('/findById/:id', function(req, res) {
    Person.findById(req.params.id, function(err, people) {
        if (err) {
            console.log("id nao encontrado");
            return;
        }
        res.send(people);
    })
});

//findOne
router.get('/findOne/:id', function(req, res) {
    Person.findOne({
        _id: req.params.id
    }, function(err, person) {
        if (err) {
            return;
        }
        res.send(person);
    });
});

//Create
router.post("/create", function(req, res) {
    Person.create({
        name: {
            firtsname: "Igor",
            lastname: "Abreu",
        },
        age: 30
    }, function(err, person) {
        if (err) {
            return;
        }
        console.log(person);
        res.send(person);
    })
});

//Save
router.post("/save", function(req, res) {
    var person = new Person({
        name: {
            firtsname: "Leo",
            lastname: "Weverton",
        },
        age: 24
    });

    person.save(person, function(err, person) {
        if (err) {
            return;
        }
        console.log(person);
        res.send(person);
    })
});

//InsertMany
router.post("/insertMany", function(req, res) {
    var arr = [{
            name: {
                firtsname: "Leo",
                lastname: "Weverton",
            },
            age: 24
        },
        {
            name: {
                firtsname: "Igor",
                lastname: "Abreu",
            },
            age: 30
        }, {
            name: {
                firtsname: "Lucas",
                lastname: "Medina",
            },
            age: 24
        }
    ];

    Person.insertMany(arr, function(err, person) {
        if (err) {
            return;
        }
        console.log(arr);
        res.send(arr);
    })
});

//update
router.put("/update/:id", function(req, res) {
    Person.update({
        _id: req.params.id
    }, {
        name: {
            firtsname: "ALTERADAO",
            lastname: "SOBRENOMEUPDATE"
        }
    }, function(err, person) {
        if (err) {
            console.log("Ocorreu erro ao atualizar");
            return;
        }
        res.send(person);
    });
});

//findOneAndUpdate
router.put("/findOneAndUpdate/:id", function(req, res) {
    Person.findOneAndUpdate({
        _id: req.params.id
    }, {
        name: {
            firtsname: "ALTERADAO",
            lastname: "SOBRENOMEUPDATE"
        }
    }, function(err, person) {
        if (err) {
            console.log("Ocorreu erro ao atualizar");
            return;
        }
        res.send(person);
    });
});

//remove
router.delete("/remove/:id", function(req, res) {
    Person.remove({
        _id: req.params.id
    }, function(err) {
        if (err) {
            console.log("Erro ao deletar registro");
            return;
        }
        res.send(req.params.id);
    });
});

//findOneAndRemove
router.delete("/findOneAndRemove/:id", function(req, res) {
    Person.findOneAndRemove({
        _id: req.params.id
    }, function(err) {
        if (err) {
            console.log("Erro ao deletar registro");
            return;
        }
        res.send(req.params.id);
    });
});

module.exports = router;