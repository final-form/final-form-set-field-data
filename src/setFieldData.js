// @flow
import type { MutableState, Mutator } from 'final-form'

const setFieldData: Mutator = (args: any[], state: MutableState) => {
  const [name, data] = args
  const field = state.fields[name]
  if (field) {
    field.data = { ...field.data, ...data }
  }
}

export default setFieldData
