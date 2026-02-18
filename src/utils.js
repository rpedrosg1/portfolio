// ─── DATE UTILITIES ──────────────────────────────────────────────
// All derived values are computed at runtime — never hardcoded.
// Import these wherever you need them; they update automatically.

/**
 * Returns how many full years have elapsed since a given date string.
 * @param {string} dateStr — ISO date string e.g. '1999-12-27'
 * @returns {number}
 */
export function yearsSince(dateStr) {
  const start = new Date(dateStr)
  const today = new Date()
  let years = today.getFullYear() - start.getFullYear()
  const m = today.getMonth() - start.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < start.getDate())) years--
  return years
}

/**
 * Returns a human-friendly "X+" string rounded down to nearest integer.
 * e.g. 3.4 years → "3+"
 * @param {string} dateStr
 * @returns {string}
 */
export function yearsLabel(dateStr) {
  return `${yearsSince(dateStr)}+`
}

// ─── SHARED COMPUTED VALUES ──────────────────────────────────────
// These are the two values used across multiple components.
// Update the source dates here and everywhere updates automatically.

export const AGE = yearsSince('1999-12-27')           // Rui's age
export const EXPERIENCE_YEARS = yearsLabel('2022-09-01') // Time at Critical Techworks
export const EMAIL = "rpedrosg1@hotmail.com"
