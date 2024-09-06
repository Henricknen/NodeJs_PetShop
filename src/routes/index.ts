import { Router } from 'express';     // importação do 'router'

const router = Router();

router.get('/', (req, res)=> {      // rota 'home'
    res.send('home');
});

export default router;