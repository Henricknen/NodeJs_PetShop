"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet"); // importando o 'model' pet
const createMenuObject_1 = require("../helpers/createMenuObject"); // importando o item do 'menu'
const search = (req, res) => {
    let query = req.query.q; // pega o que o usuário digitou no campo de pesquisa e armazena na string 'query'
    if (!query) { // se não tiver nada em 'query'
        res.redirect('/'); // será redirecionado para página inicial
        return; // return 'para' a execução da função
    }
    let list = pet_1.Pet.getFromName(query); // gera a lista com base no que o usuário digitar
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)(''),
        list,
        query
    });
};
exports.search = search;
