import React, { useState } from 'react'

const Options = () => {
  const [inputValue, setInputValue] = useState('')

  const addSite = async () => {
    let storedItems: String[] = []
    const formatedValue = `*://*.${inputValue}/*`

    chrome.storage.sync.get(['blacklisted'], result => {
      if (!result.blacklisted) {
        chrome.storage.sync.set({ blacklisted: [formatedValue] })
        return
      }

      storedItems = [...result.blacklisted, formatedValue]
      chrome.storage.sync.set({ blacklisted: storedItems })
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
