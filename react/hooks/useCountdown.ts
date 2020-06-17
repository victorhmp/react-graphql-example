import { useEffect, useState } from 'react'

import { splitTime } from '../modules/time'

const ONE_SECOND_IN_MILLIS = 1000

function useCountdown(targetDate: Date) {
  const now = Date.now()
  const finalDate = new Date(targetDate)

  const secondsLeft = (finalDate.getTime() - now) / ONE_SECOND_IN_MILLIS

  const [timeLeft, setTimeLeft] = useState(splitTime(secondsLeft))

  useEffect(() => {
    const interval = setTimeout(() => {
      const formattedTimeLeft = splitTime(secondsLeft)

      setTimeLeft(formattedTimeLeft)
    }, ONE_SECOND_IN_MILLIS)

    return () => clearInterval(interval)
  }, [secondsLeft])

  return timeLeft
}

export default useCountdown
