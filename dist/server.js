"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // importação das bibliotecas que será utilizadas
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config(); // pucha arquivo de configuração
const server = (0, express_1.default)();
server.set('view engine', 'mustache'); // configurando 'template' engine, mustache
server.set('views', path_1.default.join(__dirname, 'views')); // configurando as pastas de visualização do projeto
server.engine('mustache', (0, mustache_express_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, '../public'))); // configurando a pasta de arquivos 'estáticos'
server.use(index_1.default);
server.use((req, res) => {
    res.render('pages/404');
});
server.listen(process.env.PORT); // colocando servidor para 'rodar'
