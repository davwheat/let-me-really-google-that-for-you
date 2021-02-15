import { RefObject } from 'react'

/**
 * Scroll to a position on the page.
 */
function ScrollTo(top: number): void {
  window.scroll({
    top,
    behavior: 'smooth',
  })
}

/**
 * Scroll to a an element, determined by a specified ID.
 */
ScrollTo.ID = function ScrollToID(elementId: string): boolean {
  if (!elementId) return false

  const element = document.getElementById(elementId)
  if (!element) return false

  ScrollTo.Element(element)

  return true
}

/**
 * Scroll to a an element, determined by a reference to the element.
 */
ScrollTo.Element = function ScrollToElement(element: HTMLElement): boolean {
  if (!element) return false

  const rect = element.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

  ScrollTo(rect.top + window.scrollY + rect.height / 2 - viewHeight / 2)

  return true
}

/**
 * Scroll to a an element, determined by a React element ref.
 */
ScrollTo.Ref = function ScrollToRef(ref: RefObject<HTMLElement>): boolean {
  const element = ref.current
  if (!element) return false

  ScrollTo.Element(element)

  return true
}

export default ScrollTo
