import { defineDb, defineTable, column } from 'astro:db';

const Facilitators = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    createdDate: column.date(),
    updatedDate: column.date(),
    firstName: column.text(),
    lastName: column.text(),
    email: column.text(),
    languages: column.text(),
    country: column.text(),
    timeZone: column.text(),
    location: column.text(),
    website: column.text(),
    yearsOfExperience: column.text(),
    areasOfExpertise: column.json(),
    certifications: column.text(),
    fees: column.text(),
    programOffered: column.text(),
    clientList: column.text(),
    status: column.text()
  }
})

export default defineDb({
  tables: { Facilitators },
})