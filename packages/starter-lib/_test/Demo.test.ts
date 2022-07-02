import { Age, Name, Person } from "@org/starter-lib"

const person = Person.make({
  name: Name.make("Mike"),
  age: Maybe.some(Age.unsafeMake(30))
})

describe("Demo", () => {
  it("guard", () => {
    assert.isTrue(Person.is({
      name: "Michael",
      age: Maybe.some(Age.unsafeMake(30))
    }))
    assert.isFalse(Person.is({
      name: "Michael"
    }))
  })

  it("decode/encode", () => {
    const result = Person.decodeJSON(Person.encodeJSON(person))
    assert.isTrue(result.isRight())
  })
})
