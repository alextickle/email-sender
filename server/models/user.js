const pushid = require('pushid');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.STRING
      allowNull: false,
      autoIncrement: false,
      defaultValue: () => pushid(),
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = models => {
    User.hasMany(models.Message, {
      foreignKey: 'user_id',
      as: 'messages'
    });
  };

  return User;
};
