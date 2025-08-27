const { DataTypes } = require('sequelize');
const sequelize = require('');

const Livro = sequelize.define('Livro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 100]
    }
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 100]
    }
  },
  ano_publicacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1
    }
  },
  genero: {
    type: DataTypes.ENUM('Fantasia', 'Drama', 'Terror', 'Aventura', 'Romance', 'Ficção'),
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
      min: 0.01
    }
  }
}, {
  tableName: 'livros',
  timestamps: false
});

module.exports = Livro;
