const Sequelize = require("sequelize");

module.exports = class Domain extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        host: {
          type: Sequelize.STRING(80),
          allowNull: false,
        },
        type: {
          type: Sequelize.ENUM("free", "premium"),
          allowNull: false,
        },
        clientSecret: {
          type: Sequelize.UUID, //충돌가능성이 매우 적은 랜덤문자열
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Domain",
        tableName: "domain",
      }
    );
  }
  static associate(db) {
    db.Domain.belongsTo(db.User);
  }
};
