import { type, string, number, nullable } from '../../../src'

export const Struct = type({
  name: nullable(string()),
  age: number(),
})

export const data = {
  name: null,
  age: 42,
}

export const output = {
  name: null,
  age: 42,
}
