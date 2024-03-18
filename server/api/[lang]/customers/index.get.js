import customers from "~/data/customers.js"

export default defineEventHandler(async (event) => {
  return customers
})
