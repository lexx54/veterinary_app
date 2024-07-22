import { Sequelize } from "sequelize";

export interface IDBProperties {
  sequelize: Sequelize,
  statuses?: any
  doctors?: any
  appoinments?: any
  patients?: any
  clinicHistories?: any 
}