import React from 'react'

const Popup = () => {
  const { runtime } = chrome

  const onStart = () => {
    runtime.sendMessage({ message: 'start' })
  }

  const onStop = () => {
    runtime.sendMessage({ message: 'stop' })
  }
  return (
    <>
      <h1>Test</h1>
      <button onClick={onStart}>start</button>
      <button onClick={onStop}>stop</button>
    </>
  )
}

export default Popup
