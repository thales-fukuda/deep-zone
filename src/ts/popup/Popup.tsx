import React, { useState, useEffect } from 'react'

import { PopupContainer, Button, Title } from './elements'

const Popup = () => {
  const { runtime, storage } = chrome
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    storage.local.get(['deepZoneActive'], result => {
      setIsActive(result.deepZoneActive)
    })
  }, [setIsActive])

  const onStart = () => {
    setIsActive(true)
    runtime.sendMessage({ message: 'start' })
  }

  const onStop = () => {
    setIsActive(false)
    runtime.sendMessage({ message: 'stop' })
  }

  return (
    <PopupContainer>
      {isActive ? (
        <Button onClick={onStop} red={true}>
          stop
        </Button>
      ) : (
        <Button onClick={onStart}>start</Button>
      )}
      {isActive && <Title>ACTIVE</Title>}
    </PopupContainer>
  )
}

export default Popup
