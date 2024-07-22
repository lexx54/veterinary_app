import { DataTypes, Sequelize } from "sequelize";

const appoinments_schema = (sequelize: Sequelize) => {
  const Appoinments = sequelize.define(
    'appoinments',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      finished_date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      createdAt: 'created_at',
      timestamps: true
    }
  )
  return Appoinments
}

export default appoinments_schema