// @flow
import type { MutableState, Mutator } from 'final-form'

type Args = [string, Object]

const setFieldData: Mutator = ([name, data]: Args, state: MutableState) => {
  const field = state.fields[name]
  if (field) {
    field.data = { ...field.data, ...data }
  }
}

export default setFieldData
