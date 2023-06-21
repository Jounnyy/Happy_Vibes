const { Sequelize } = require('sequelize');
const db = require('../Config/database');
const Users = require('./usersData.model');

const { DataTypes } = Sequelize;

const Posting = db.define(
  'posting_data',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    like: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { freezeTableName: true },
);

Users.hasMany(Posting);
Posting.belongsTo(Users, { foreignKey: 'userId' });

module.exports = Posting;
