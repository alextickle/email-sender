const pushid = require('pushid');

module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define('Message', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: false,
      defaultValue: () => pushid(),
      primaryKey: true
    },
    content: DataTypes.STRING
  });

  Message.associate = models => {
    Message.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
  };
  return Message;
};
