export default function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false

  // See for more info: https://stackoverflow.com/a/52855084/11091039
  // Supported in every browser, except IE (so basically anything that deserves to use the internet)
  return window.matchMedia('(pointer: coarse)').matches
}
