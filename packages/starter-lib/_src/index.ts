export type Age = Positive & Int & Finite & Brand<"Age">
export const Age = Derive<Make<Age>>()

export type Name = string & Brand<"Name">
export const Name = Derive<Make<Name>>()

export interface Person {
  readonly name: Name
  readonly age: Maybe<Age>
}
export const Person = Derive<Codec<Person>>()
