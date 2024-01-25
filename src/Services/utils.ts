export function isMobile(): boolean {
  // Check if window is defined
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  }

  // Return false if window is not defined (non-browser environment)
  return false;
}