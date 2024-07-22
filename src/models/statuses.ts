import { DataTypes, Sequelize } from "sequelize";

const statuses_schema = (sequelize: Sequelize) => {
  const Statuses = sequelize.define(
    'statuses',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
    }
  )
  return Statuses
}

export default statuses_schema