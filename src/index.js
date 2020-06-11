const express = require('express');
const routes = require('./routes')

const app = express();
app.use(express.json())
app.use(routes)


app.listen(3333)
/**
 * Métodos HTTp:
 * GET: Buscar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginas)
 * Router Params: Parâmetros utilizados para identificar recursos
 * Request body: O corpo da requisição, utilizado para criar ou
 */

