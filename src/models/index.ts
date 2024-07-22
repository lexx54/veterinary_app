import appoinments_schema from "./appointments"
import clinicHistories_schema from "./clinicHistories"
import doctors_schema from "./doctors"
import patients_schema from "./patients"
import statuses_schema from "./statuses"
import db from '../config/db'

db.statuses =  statuses_schema(db.sequelize)
db.doctors =  doctors_schema(db.sequelize)
db.appoinments =  appoinments_schema(db.sequelize)
db.patients =  patients_schema(db.sequelize)
db.clinicHistories =  clinicHistories_schema(db.sequelize)

// ? Relationships
// * Statuses relationships
db.statuses.hasOne(db.appoinments)
db.statuses.hasOne(db.clinicHistories)

db.appoinments.belongsTo(db.statuses)
db.clinicHistories.belongsTo(db.statuses)


// * patients relationships
db.patients.hasOne(db.appoinments)
db.patients.hasMany(db.clinicHistories)

db.appoinments.belongsTo(db.patients)
db.clinicHistories.belongsTo(db.patients)

// * Doctor relationships
db.doctors.hasOne(db.clinicHistories)
db.clinicHistories.belongsTo(db.doctors)


export default db