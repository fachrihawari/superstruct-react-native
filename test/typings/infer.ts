import { Infer, object, number, string, assert } from '../../src'
import { test } from '..'

const Struct = object()
type T = Infer<typeof Struct>

test<T>((x) => {
  assert(x, Struct)
  return x
})
