const Expositor = require('../../src/modules/expositor/models/expositorModel');
const { sequelize } = require('../../src/config/configDB');
const app = require('../../index');
const req = require('supertest');

beforeAll(async () => {
    //cria as tabelas antes de iniciar a switch de testes 
    await sequelize.sync({ force: true })
})
afterAll(async () => {
    //Encerra a comunicação com o banco ao encerrar a  switch de testes 
    await sequelize.close();
})

afterEach(async () => {
    // Limpa os dados da tabela a cada teste isolado.
    await Expositor.truncate();
})


describe('Testes do endpoint POST /expositor', ()=>{

    test('Deve cadastrar corretamente um expositor', async ()=>{
        const res = await req(app).post('/expositor').send({nome: "Juca", email: "juca@email.com", instituicao:"SENAC"});
        expect(res.status).toBe(201);
        expect(res.body.expositor).toHaveProperty('nome');
        expect(res.body.expositor.nome).toBe("Juca");
        expect(res.body.expositor.email).toBe("juca@email.com");
        expect(res.body.expositor.instituicao).toBe("SENAC");
        expect(res.body.msg).toBe("Expositor cadastrado com sucesso");
    });

    test('Deve apresentar mensagem erro para email duplicado', async ()=>{
        await req(app).post('/expositor').send({nome: "Juca", email: "juca@email.com", instituicao:"SENAC"});
        const res = await req(app).post('/expositor').send({nome: "Maria", email: "juca@email.com", instituicao:"SENAC"});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe("Email já cadastrado");
    });

    
    test('Deve apresentar mensagem erro para campos vazios', async ()=>{
        const res = await req(app).post('/expositor').send({nome: "", email: "", instituicao:""});
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe("Campos obrigatórios não informados");
    });


})







