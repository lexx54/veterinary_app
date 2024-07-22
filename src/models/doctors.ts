import { DataTypes, Sequelize } from "sequelize";

const doctors_schema = (sequelize: Sequelize) => {
  const Doctors = sequelize.define(
    'doctors',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      specialities: {
        allowNull: false,
        type: DataTypes.JSON,
        defaultValue: '[]'
      },
      phone_number: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      age: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      is_retired: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }
  )
  return Doctors
}

export default doctors_schema