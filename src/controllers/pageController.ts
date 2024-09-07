import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {      // 'export' exporta a rota da página 'home' para ser possível utilizada do lado de fora
    res.render('pages/page');

}

export const dogs = (req: Request, res: Response) => {

    // res.render('pages/page');

}

export const cats = (req: Request, res: Response) => {

    // res.render('pages/page');

}

export const fishes = (req: Request, res: Response) => {

    // res.render('pages/page');

}