import React, { useState, useEffect } from 'react'

interface Props {
  text: string
  interval?: number
  isTextStream?: boolean
}

const StreamingText: React.FC<Props> = ({
  text,
  interval = 5,
  isTextStream = false,
}) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (isTextStream) {
      let i = 0

      const timer = setInterval(() => {
        if (i < text.length - 1) {
          setDisplayedText((prevText) => prevText + text[i])
          i++
        } else {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [text, interval])

  return <>{isTextStream ? displayedText : text}</>
}

export default StreamingText
