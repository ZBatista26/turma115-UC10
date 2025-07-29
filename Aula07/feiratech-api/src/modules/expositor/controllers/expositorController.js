const { where } = require('sequelize');
const ExpositorModel = require('../models/expositorModel');
const expositorModel = require('../models/expositorModel');

class ExpositorController{

    static async criar(req, res){
        try{
            const{nome, email, instituicao} = req.body;

            if(!nome || !email || !instituicao){
                res.status(400).json({msg: "Campos obrigatórios não informados"});
                return;
            }

            const findExpositor = await ExpositorModel.findOne({where:{email}});
            if(findExpositor){
                res.status(400).json({msg: "Email já cadastrado"});
                return;
            }
            const expositor = await expositorModel.create({nome, email, instituicao})
            res.status(201).json({msg: "Expositor cadastrado com sucesso", expositor})
        }catch(error){
            res.status(500).json({ msg: 'Erro interno', error: error.message });
        }


    }

}

module.exports = ExpositorController;