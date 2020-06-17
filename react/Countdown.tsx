import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import useCountdown from './hooks/useCountdown'

interface CountdownProps {
  targetDate: string
  countdownHeadline: string
}

const CSS_HANDLES = [
  'countdown',
  'countdownContainer',
  'countdownHeadline',
] as const

const Countdown: FC<CountdownProps> = ({
  targetDate = '2020-06-17T17:30:00-03:00',
  countdownHeadline = 'Something awesome will happen in: ',
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  const finalDate = new Date(targetDate)
  const timeLeft = useCountdown(finalDate)

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
