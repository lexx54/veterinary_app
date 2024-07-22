import { DataTypes, Sequelize } from "sequelize";

const clinicHistories_schema = (sequelize: Sequelize) => {
  const ClinicHistories = sequelize.define(
    'clinicHistories',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      title: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      finished_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      description: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      diagnostic: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      treatment: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      symptomps: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
    },
    {
      createdAt: 'created_at',
      timestamps: true
    }
  )
  return ClinicHistories
}

export default clinicHistories_schema