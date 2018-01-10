import setFieldData from './setFieldData'

describe('setFieldData', () => {
  it('should not call any tools', () => {
    const setIn = jest.fn()
    const getIn = jest.fn()
    const changeValue = jest.fn()
    const shallowEqual = jest.fn()
    const state = { fields: { foo: { data: {} } } }
    const result = setFieldData(['foo', { cool: true }], state, {
      getIn,
      setIn,
      changeValue,
      shallowEqual
    })
    expect(result).toBeUndefined()
    expect(getIn).not.toHaveBeenCalled()
    expect(setIn).not.toHaveBeenCalled()
    expect(changeValue).not.toHaveBeenCalled()
    expect(shallowEqual).not.toHaveBeenCalled()
  })

  it('should set data', () => {
    const data = {}
    const foo = { data }
    const fields = { foo }
    const state = { fields }
    setFieldData(['foo', { awesome: true }], state, {})
    expect(state.fields).toBe(fields)
    expect(state.fields.foo).toBe(foo)
    expect(state.fields.foo.data).not.toBe(data)
    expect(state.fields.foo.data.awesome).toBe(true)
  })

  it('should merge data', () => {
    const data = { lib: 'final-form', author: 'erikras' }
    const foo = { data }
    const fields = { foo }
    const state = { fields }
    setFieldData(['foo', { awesome: true }], state, {})
    expect(state.fields).toBe(fields)
    expect(state.fields.foo).toBe(foo)
    expect(state.fields.foo.data).not.toBe(data)
    expect(state.fields.foo.data.lib).toBe('final-form')
    expect(state.fields.foo.data.author).toBe('erikras')
    expect(state.fields.foo.data.awesome).toBe(true)
  })

  it('should do nothing if field is not found', () => {
    const data = {}
    const foo = { data }
    const fields = { foo }
    const state = { fields }
    setFieldData(['bar', { awesome: true }], state, {})
    expect(state.fields).toBe(fields)
    expect(state.fields.foo).toBe(foo)
    expect(state.fields.foo.data).toBe(data)
  })
})
