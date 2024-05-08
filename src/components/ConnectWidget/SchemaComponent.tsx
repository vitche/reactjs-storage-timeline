import React from 'react'
import BackArrow from '../BackArrow'

interface PropsType {
  schemas: string[]
  setStep: React.Dispatch<React.SetStateAction<number>>
  getListTimeLines: (schema: string) => Promise<void>
}

const SchemaComponent = ({schemas, setStep, getListTimeLines}:PropsType) => {
  return (
    <div className="">
          <div className="components-header">
            <BackArrow
              className={"back-button"}
              onClick={() => setStep((prev) => prev - 1)}
            />
            <div>Database schemas</div>
          </div>
          <div className="schemas-cont">
            {schemas.map((entry, key) => (
              <div
                className="schema-element"
                key={key}
                onClick={() => getListTimeLines(entry)}
              >
                {entry}
              </div>
            ))}
          </div>
        </div>
  )
}

export default SchemaComponent
