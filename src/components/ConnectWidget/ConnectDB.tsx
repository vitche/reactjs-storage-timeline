import React from 'react'

interface PropsType {
  urlDb: string
  setUrlDb: any
  getSchema: () => Promise<void>
}

const ConnectDB = ({urlDb, setUrlDb, getSchema}: PropsType) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>Connect to your databese </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              placeholder="enter url address"
              type="text"
              value={urlDb}
              onChange={(e) => setUrlDb(e.target.value)}
            />
            <button onClick={getSchema}>Connect</button>
          </div>
        </div>
  )
}

export default ConnectDB
