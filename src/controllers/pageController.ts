import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {      // 'export' exporta a rota da página 'home' para ser possível utilizada do lado de fora
    let list = Pet.getAll();        // variável 'list' reçebendo o array de 'pets'

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {       // objeto 'banner' com informações relaçionadas ao banner
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list        // envia o 'array' de pets list para home
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');      // variável 'list' reçebendo o array de 'dogs'

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}