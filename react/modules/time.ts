const SECONDS_IN_MINUTE = 60
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE

interface SplitTime {
  hours: string
  minutes: string
  seconds: string
}

const fillWithZero = (digits: number, number: number): string => {
  const filled = '0'.repeat(digits - 1) + number.toString()
  return filled.slice(filled.length - digits)
}

export const splitTime = (totalSeconds: number): SplitTime => {
  const hours = Math.floor(totalSeconds / SECONDS_IN_HOUR)
  const minutes = Math.floor(
    (totalSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE
  )
  const seconds = Math.floor(
    (totalSeconds % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE
  )

  return {
    hours: fillWithZero(2, hours),
    minutes: fillWithZero(2, minutes),
    seconds: fillWithZero(2, seconds),
  }
}
