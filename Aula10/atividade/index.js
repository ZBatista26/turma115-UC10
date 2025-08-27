const express = require('express');
const { sequelize } = require('./src/config/configDb');
require('dotenv').config();
const livroRoutes = require('./src/modules/livros/router/livroRouter');

const app = express();
const PORT = process.env.PORTA
app.use(express.json());
app.use('/livros', livroRoutes);


// await sequelize.sync({ force: true })


// app.listen(PORT, ()=>{
//     console.log(`aplicação rodando em http://localhost:${PORT}`); 
// })

sequelize.sync()
  .then(async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
      
      app.listen(PORT, () => {





        
        console.log(`Servidor rodando na porta ${PORT}`);
      });
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
    }
  })
  .catch((syncError) => {
    console.error('Erro ao sincronizar com o banco de dados:', syncError);
  });

module.exports = app;

