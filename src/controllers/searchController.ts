import { Request, Response } from 'express';

import { Pet } from '../models/pet';        // importando o 'model' pet
import { createMenuObject } from '../helpers/createMenuObject';     // importando o item do 'menu'

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;      // pega o que o usuário digitou no campo de pesquisa e armazena na string 'query'

    if(!query) {       // se não tiver nada em 'query'
        res.redirect('/');      // será redirecionado para página inicial
        return;     // return 'para' a execução da função
    }

    let list = Pet.getFromName(query);      // gera a lista com base no que o usuário digitar

    res.render('pages/page', {      // enviando os itens para tela
        menu: createMenuObject(''),
        list,
        query
    });

}