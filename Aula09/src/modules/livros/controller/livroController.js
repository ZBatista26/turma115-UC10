const Livro = require('../models/livroModel');
const { validarLivro } = require('../validators/livroValidator');
const { Op } = require('sequelize');

class LivroController {
  static async criar(req, res) {
    const erro = validarLivro(req.body);
    if (erro) return res.status(400).json({ msg: erro });

    const livro = await Livro.create(req.body);
    return res.status(201).json({ ...livro.toJSON(), msg: 'Livro criado com sucesso' });
  }

  static async listar(req, res) {
    const livros = await Livro.findAll();
    return res.status(200).json(livros);
  }

  static async buscarPorTitulo(req, res) {
    const { titulo } = req.query;
    const livro = await Livro.findAll({
      where: {
        titulo: { [Op.iLike]: `%${titulo}%` }
      }
    });
    if (!livro.length) return res.status(404).json({ msg: 'Livro não encontrado' });

    return res.status(200).json([{ ...livro[0].toJSON(), msg: 'Livro encontrado' }]);
  }

  static async buscarPorId(req, res) {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ msg: 'Livro não encontrado' });

    return res.status(200).json({ ...livro.toJSON(), msg: 'Livro encontrado' });
  }

  static async atualizar(req, res) {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ msg: 'Livro não encontrado' });

    const erro = validarLivro(req.body);
    if (erro) return res.status(400).json({ msg: 'Dados inválidos para atualização' });

    await livro.update(req.body);
    return res.status(200).json({ ...livro.toJSON(), msg: 'Livro atualizado com sucesso' });
  }

  static async deletar(req, res) {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ msg: 'Livro não encontrado' });

    await livro.destroy();
    return res.status(204).json({ msg: 'Livro deletado com sucesso' });
  }
}

module.exports = LivroController;
