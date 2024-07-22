import { IDBProperties } from "../types/db_config";

const { Sequelize } = require('sequelize');


require('dotenv').config()
const settings = {
  host: process.env.DB_HOST|| 'localhost',
  dialect: 'postgres',
  port: parseInt(process.env.DB_PORT || '5432')
}
const username = process.env.DB_USER
const password = process.env.DB_PASS
const db_name = process.env.DB_NAME

const sequelize = new Sequelize(
  db_name,
  username,
  password,
  settings
)

const db: IDBProperties = {
  sequelize: sequelize,
}

export default db