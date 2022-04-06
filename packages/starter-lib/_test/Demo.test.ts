import { guardPerson } from "@org/starter-lib";

describe("Demo", () => {
  it("first test", () => {
    assert.isTrue(guardPerson.is({
      firstName: "Michael",
      lastName: "Arnaldi"
    }));
    assert.isFalse(guardPerson.is({
      firstName: "Michael"
    }));
  });
});
