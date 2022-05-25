import type { Person } from "@org/starter-lib"
import { guardPerson } from "@org/starter-lib"

const person: Person = {
  firstName: "Michael",
  lastName: "Arnaldi"
}

const notPerson = {
  firstName: "Michael"
}

if (guardPerson.is(person)) {
  console.log("Object ", JSON.stringify(person), " is of type Person")
}
if (!guardPerson.is(notPerson)) {
  console.log("Object ", JSON.stringify(notPerson), " is not of type Person")
}
