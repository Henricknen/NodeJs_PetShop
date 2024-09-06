import { Router } from 'express';     // importação do 'router'
import * as PageController from '../controllers/pageController';        // importando 'controller' pageController
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);      // rota 'home'
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchController.search);     // rota de 'busca'

export default router;