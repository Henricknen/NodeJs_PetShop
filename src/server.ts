import express from 'express';      // importação das bibliotecas que será utilizadas
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

 dotenv.config();       // pucha arquivo de configuração

 const server = express();

 server.set('view engine', 'mustache');     // configurando 'template' engine, mustache
 server.set('views', path.join(__dirname, 'views'));        // configurando as pastas de visualização do projeto
 server.engine('mustache', mustache());

 server.use(express.static(path.join(__dirname, '../public')));     // configurando a pasta de arquivos 'estáticos'


 server.listen(process.env.PORT);       // colocando servidor para 'rodar'