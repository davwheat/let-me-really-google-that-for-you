import generateTransitions, { DefaultDuration, Durations, DefaultEasing } from '../../src/functions/generateTransitions'

describe('Generate transitions', () => {
  it('generates a transition with one property', async () => {
    const transitions = generateTransitions('opacity')

    expect(transitions).toEqual({ transition: `opacity ${DefaultDuration}ms ${DefaultEasing}` })
  })

  it('generates a transition with one property and duration', async () => {
    const transitions = generateTransitions('opacity', 'short')

    expect(transitions).toEqual({ transition: `opacity ${Durations.short}ms ${DefaultEasing}` })
  })

  it('generates a transition with one property, duration and easing', async () => {
    const transitions = generateTransitions('opacity', 'long', 'ease-out')

    expect(transitions).toEqual({ transition: `opacity ${Durations.long}ms ease-out` })
  })

  it('generates a transition with multiple properties, one duration and one easing', async () => {
    const transitions = generateTransitions(['opacity', 'transform'], 'verylong', 'ease-out')

    expect(transitions).toEqual({ transition: `opacity ${Durations.verylong}ms ease-out, transform ${Durations.verylong}ms ease-out` })
  })

  it('generates a transition with multiple properties, multiple durations and one easing', async () => {
    const transitions = generateTransitions(['opacity', 'transform'], ['verylong', 'short'], 'ease-out')

    expect(transitions).toEqual({ transition: `opacity ${Durations.verylong}ms ease-out, transform ${Durations.short}ms ease-out` })
  })

  it('generates a transition with multiple properties, multiple durations and multiple easings', async () => {
    const transitions = generateTransitions(['opacity', 'transform'], ['verylong', 'short'], ['ease-out', 'ease-in'])

    expect(transitions).toEqual({ transition: `opacity ${Durations.verylong}ms ease-out, transform ${Durations.short}ms ease-in` })
  })

  it('generates a transition with multiple properties, mismatched durations and multiple easings', async () => {
    const transitions = generateTransitions(['opacity', 'transform', 'color'], ['verylong', 'medium'], ['ease-out', 'ease-in', 'linear'])

    expect(transitions).toEqual({
      transition: `opacity ${Durations.verylong}ms ease-out, transform ${Durations.medium}ms ease-in, color ${Durations.medium}ms linear`,
    })
  })

  it('generates a transition with multiple properties, mismatched durations and mismatched easings', async () => {
    const transitions = generateTransitions(['opacity', 'transform', 'color'], ['verylong', 'medium'], ['ease-out', 'linear'])

    expect(transitions).toEqual({
      transition: `opacity ${Durations.verylong}ms ease-out, transform ${Durations.medium}ms linear, color ${Durations.medium}ms linear`,
    })
  })

  it('generates a transition with one property, and multiple durations and easings', async () => {
    const transitions = generateTransitions('opacity', ['short', 'medium'], ['ease-out', 'linear'])

    expect(transitions).toEqual({
      transition: `opacity ${Durations.short}ms ease-out`,
    })
  })

  it('generates a transition with multiple properties and default duration and easings', async () => {
    const transitions = generateTransitions(['opacity', 'transform'])

    expect(transitions).toEqual({
      transition: `opacity ${DefaultDuration}ms ${DefaultEasing}, transform ${DefaultDuration}ms ${DefaultEasing}`,
    })
  })

  it('generates a transition with multiple properties and custom duration values', async () => {
    const transitions = generateTransitions(['opacity', 'transform'], [100, 200])

    expect(transitions).toEqual({
      transition: `opacity 100ms ${DefaultEasing}, transform 200ms ${DefaultEasing}`,
    })
  })

  it('generates a transition with multiple properties and custom easing values', async () => {
    const transitions = generateTransitions(['opacity', 'transform'], undefined, ['ease-in', 'ease-out'])

    expect(transitions).toEqual({
      transition: `opacity ${DefaultDuration}ms ease-in, transform ${DefaultDuration}ms ease-out`,
    })
  })

  it('generates a transition with multiple properties and a custom duration value', async () => {
    const transitions = generateTransitions(['opacity', 'transform'], 100)

    expect(transitions).toEqual({
      transition: `opacity 100ms ${DefaultEasing}, transform 100ms ${DefaultEasing}`,
    })
  })

  it('generates a transition with multiple properties and a custom duration value', async () => {
    const transitions = generateTransitions(['opacity', 'transform'], ['uses default!'], [false])

    expect(transitions).toEqual({
      transition: `opacity ${DefaultDuration}ms ${DefaultEasing}, transform ${DefaultDuration}ms ${DefaultEasing}`,
    })
  })
})
