function IsMobile(): boolean {
  // Ensure window and window.innerWidth are available
  if (typeof window === 'undefined' || typeof window.innerWidth !== 'number') {
    return false;
  }
  
  const windowWidth = window.innerWidth;
  
  // Firefox may have issues with innerWidth calculation in some scenarios
  // Add additional checks for browser-specific quirks
  const isFirefox = typeof navigator !== 'undefined' && 
    navigator.userAgent.toLowerCase().includes('firefox');
  
  if (isFirefox) {
    // For Firefox, also check document.documentElement.clientWidth
    const docWidth = document?.documentElement?.clientWidth;
    if (docWidth && Math.abs(windowWidth - docWidth) > 50) {
      // Use the smaller of the two values if they differ significantly
      return Math.min(windowWidth, docWidth) < 768;
    }
  }
  
  return windowWidth < 768;
}

export { IsMobile };
