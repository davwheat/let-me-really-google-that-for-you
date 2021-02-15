import { Breakpoints } from '../data'

/**
 * Returns `true` if viewport is less than 580px.
 */
export default function isSmallViewport(): boolean {
  if (typeof window === 'undefined') return false

  return window.matchMedia(Breakpoints.upTo.medium).matches
}
