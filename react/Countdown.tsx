import React, { FC, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { splitTime } from './modules/time'

interface CountdownProps {
  targetDate: string
  countdownHeadline: string
}

const ONE_SECOND_IN_MILLIS = 1000

const CSS_HANDLES = [
  'countdown',
  'countdownContainer',
  'countdownHeadline',
] as const

const Countdown: FC<CountdownProps> = ({
  targetDate = '2020-06-17T15:00:00-03:00',
  countdownHeadline = 'Something awesome will happen in: ',
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  const finalDate = new Date(targetDate)
  const now = Date.now()

  const secondsLeft = (finalDate.getTime() - now) / ONE_SECOND_IN_MILLIS

  const [timeLeft, setTimeLeft] = useState(splitTime(secondsLeft))

  setTimeout(() => {
    const formattedTimeLeft = splitTime(secondsLeft)

    setTimeLeft(formattedTimeLeft)
  }, ONE_SECOND_IN_MILLIS)

  const countdownValue = `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`

  return (
    <div className={`${handles.countdownContainer} tc c-muted-1 pv7`}>
      <h1
        className={`${handles.countdownHeadline} t-heading-3 pt0 mt0 fw3 w-100`}
      >
        {countdownHeadline}
      </h1>
      <span className={`${handles.countdown} t-heading-3 pb0 fw3 w-100`}>
        {countdownValue}
      </span>
    </div>
  )
}

export default Countdown
