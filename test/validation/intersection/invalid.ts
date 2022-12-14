import { type, intersection, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ b: number() })

export const Struct = intersection([A, B])

export const data = {
  a: 'a',
  b: 'invalid',
}

export const failures = [
  {
    type: 'number',
    value: 'invalid',
    refinement: undefined,
    path: ['b'],
    branch: [data, data.b],
  },
]
