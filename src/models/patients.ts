import { DataTypes, Sequelize } from "sequelize";

const patients_schema = (sequelize: Sequelize) => {
  const Patients = sequelize.define(
    'patients',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      specie: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      breed: {
        type: DataTypes.CHAR(100),
        allowNull: true
      },
      phone_number: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      born_date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      createdAt: 'created_at',
      timestamps: true
    }
  )
  return Patients
}

export default patients_schema