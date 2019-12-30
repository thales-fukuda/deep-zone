import React from 'react'

const Popup = () => {
  const onStart = () => {
    chrome.runtime.sendMessage({ message: 'start' })
  }

  const onStop = () => {
    chrome.runtime.sendMessage({ message: 'stop' })
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
