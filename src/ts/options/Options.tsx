import React, { useState, useEffect } from 'react'
import {
  Wrapper,
  Container,
  InputContainer,
  InputLeft,
  BlackListLabel,
  LabelText,
  BlackListInput,
  BlackList,
  BlackListElement,
  CloseIcon,
  Section,
} from './elements'

const Options = () => {
  const { storage } = chrome
  const [inputValue, setInputValue] = useState('')
  const [blacklist, setBlacklist] = useState<string[]>([])

  useEffect(() => {
    storage.sync.get(['blacklisted'], result => {
      setBlacklist(result.blacklisted)
    })
  }, [setBlacklist])

  const addSite = () => {
    let storedItems: string[] = []

    if (!blacklist) {
      storage.sync.set({ blacklisted: [inputValue] })
      return
    }

    storedItems = [...blacklist, inputValue]
    storage.sync.set({ blacklisted: storedItems })
    setBlacklist(storedItems)
    setInputValue('')
  }

  const removeSite = (index: number) => {
    const newBlacklist = blacklist.slice(index + 1, blacklist.length)
    setBlacklist(newBlacklist)

    storage.sync.set({ blacklisted: newBlacklist })
  }

  const handleKeyPress = (value: string): void => {
    if (value !== 'Enter') return

    addSite()
  }

  return (
    <Wrapper>
      <Container>
        <Section>Options</Section>
        <BlackListLabel>
          <InputContainer>
            <InputLeft>WWW.</InputLeft>
            <BlackListInput
              type='text'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={e => handleKeyPress(e.key)}
              spellCheck='false'
            />
          </InputContainer>
          <LabelText>
            Add URLs to the <strong>blacklist</strong>
          </LabelText>
        </BlackListLabel>
        <BlackList>
          {blacklist.map((element, index) => (
            <BlackListElement key={Math.random()}>
              <CloseIcon onClick={() => removeSite(index)}>x</CloseIcon>
              {element}
            </BlackListElement>
          ))}
        </BlackList>
      </Container>
    </Wrapper>
  )
}

export default Options
