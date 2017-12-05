// @flow
import type { MutableState, Mutator } from 'final-form'

type Args = [string, Object]

const setFieldData: Mutator = ([name, data]: Args, state: MutableState) => {
  state.fields[name].data = { ...state.fields[name].data, ...data }
}

export default setFieldData
