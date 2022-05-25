export interface Person {
  readonly firstName: string
  readonly lastName: string
}

export const guardPerson: Guard<Person> = Derive()
