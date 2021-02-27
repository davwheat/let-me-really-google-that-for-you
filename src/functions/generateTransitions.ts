const Durations = {
  verylong: 750,
  long: 250,
  medium: 200,
  short: 125,
} as const

const DefaultDuration = Durations.medium
const DefaultEasing = 'ease-in-out'

/**
 * Generates a transition object to be used for CSS-in-JS.
 *
 * Implement with a `...` spread operator on the function.
 *
 * @example { "myCoolClass": { ...generateTransition("color", "medium", "ease-out") } }
 */
export default function generateTransitions(
  property: string | string[],
  duration: keyof typeof Durations | Array<keyof typeof Durations> = 'medium',
  easing: string | string[] = 'ease-in-out',
): { transition: string } {
  const propsIsArray = Array.isArray(property)
  const durationIsArray = Array.isArray(duration)
  const easingIsArray = Array.isArray(easing)

  if (propsIsArray) {
    // we have multiple transitions to generate
    const endTransition = { transition: '' }

    // @ts-expect-error: This is definitely an array.
    property.forEach((prop: string, i: string | number) => {
      let _easing = easing || DefaultEasing
      let _duration

      /*
        if we have multiple easing/duration values, use, in desc. order:
      
        1. value at same index as this property
        2. last value
        3. default value
      */

      if (durationIsArray) {
        // use manual ms input, failing that use string-based values as explained above
        _duration = typeof duration[i] === 'number' ? duration[i] : Durations[duration[i]] || Durations[easing[easing.length - 1]] || DefaultDuration
      } else {
        // @ts-expect-error: `duration` is definitely not an array.
        _duration = typeof duration === 'number' ? duration : Durations[duration] || DefaultDuration
      }

      if (easingIsArray) _easing = easing[i] || easing[easing.length - 1] || DefaultEasing

      const thisTrans = createTransitionValue(prop, _duration, _easing)

      // append this transition's string value, with comma if there has been values before it
      endTransition.transition = endTransition.transition + (endTransition.transition === '' ? thisTrans : `, ${thisTrans}`)
    })

    return endTransition
  } else {
    // only one value to transition

    let _easing = easing || DefaultEasing
    let _duration

    /*
      if we have multiple easing/duration values, use, in desc. order:
    
      1. value at same index 0
      3. default value
    */

    if (durationIsArray) {
      // use manual ms input, failing that use string-based values as explained above
      _duration = typeof duration[0] === 'number' ? duration[0] : Durations[duration[0]] || DefaultDuration
    } else {
      // @ts-expect-error: `duration` is definitely not an array.
      _duration = typeof duration === 'number' ? duration : Durations[duration] || DefaultDuration
    }

    if (easingIsArray) _easing = easing[0] || DefaultEasing

    return {
      transition: createTransitionValue(property, _duration, _easing),
    }
  }
}

function createTransitionValue(property, durationMs, easing) {
  if (durationMs < 5) console.warn('`createTransitionValue` called with duration < 5ms. Are you sure this was passed in milliseconds?')

  return `${property} ${durationMs}ms ${easing}`
}
