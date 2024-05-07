import React from 'react'
import BackArrow from '../BackArrow'
import { SelectedTime } from './ConnectWidget'



interface PropsType {
  setStep: React.Dispatch<React.SetStateAction<number>>
  selectedTime: SelectedTime
}


const TimelineComponent = ({setStep, selectedTime}: PropsType) => {
  return (
    <div className="widget-cont">
          <div className="components-header">
            <BackArrow
              className={"back-button"}
              onClick={() => setStep((prev) => prev - 1)}
            />
            <div>{selectedTime.timeLine}</div>
          </div>
          <div className="timelines-cont">
            <div>Time: {selectedTime.time}</div>
            <div>Value: {selectedTime.value}</div>
            {/* <div>
              Value:
              <DisplayValues elements={JSON.parse(selectedTime.value)} />
            </div> */}
          </div>
        </div>
  )
}

export default TimelineComponent
