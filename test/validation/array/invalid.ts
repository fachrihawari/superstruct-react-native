import { array, number } from '../../../src'

export const Struct = array(number())

export const data = 'invalid'

export const failures = [
  {
    value: 'invalid',
    type: 'array',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]
