import React from 'react'
import BackArrow from '../BackArrow'

interface PropsType {
  setStep: React.Dispatch<React.SetStateAction<number>>
  timeLines: string[]
  getTimeLine: (timeLine: string, format?: string) => Promise<void>
}


const TimelinesComponent = ({setStep, timeLines, getTimeLine}: PropsType) => {
  return (
    <div className="widget-cont">
          <div className="components-header">
            <BackArrow
              className={"back-button"}
              onClick={() => setStep((prev) => prev - 1)}
            />
            <div>Time lines</div>
          </div>
          <div className="timelines-cont">
            {timeLines.map((entry, key) => (
              <div
                className="schema-element"
                key={key}
                onClick={() => getTimeLine(entry)}
              >
                {entry}
              </div>
            ))}
          </div>
        </div>
  )
}

export default TimelinesComponent
