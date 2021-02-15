import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

/**
 * React's `useState`, but implmenting LocalStorage.
 *
 * `S` must be a JSON-compatible type (e.g. string, number, JS Object)
 *
 * @param key Key where value should be saved in LocalStorage
 * @param initialValue Default state if no saved state is found
 */
function useStateWithLocalStorage<S>(key: string, initialValue: S): [S, Dispatch<SetStateAction<S>>, () => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.error(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.warn(error)
    }
  }

  const resetValue = () => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = initialValue
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.warn(error)
    }
  }

  return [storedValue, setValue, resetValue]
}

export default useStateWithLocalStorage
