import React, { useState } from 'react'

const Options = () => {
  const { storage } = chrome
  const [inputValue, setInputValue] = useState('')

  const addSite = async () => {
    let storedItems: string[] = []
    const formatedValue = `*://*.${inputValue}/*`

    storage.sync.get(['blacklisted'], result => {
      if (!result.blacklisted) {
        storage.sync.set({ blacklisted: [formatedValue] })
        return
      }

      storedItems = [...result.blacklisted, formatedValue]
      storage.sync.set({ blacklisted: storedItems })
    })
  }

  return (
    <>
      <label>
        Add site
        <input
          type='text'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </label>
      <button onClick={addSite}>Add</button>
    </>
  )
}

export default Options
