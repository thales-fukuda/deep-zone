import { closeTabs } from './utils'

const redirectUrl = chrome.runtime.getURL('/blockPage.html')
let closedTabs: string[] = []

const redirectToBlockPage = () => {
  return {
    redirectUrl,
  }
}

const startDeepZone = () => {
  chrome.storage.sync.get(['blacklisted'], result => {
    const blacklist = result.blacklisted

    if (!blacklist) {
      return
    }

    closeTabs({ url: blacklist }, list => {
      closedTabs = list
    })

    chrome.webRequest.onBeforeRequest.addListener(
      redirectToBlockPage,
      { urls: blacklist, types: ['main_frame'] },
      ['blocking']
    )
  })
}

const restoreTabs = (closed: string[]) => {
  closed.forEach((url: string) => {
    chrome.tabs.create({
      url,
    })
  })
}

chrome.runtime.onMessage.addListener(request => {
  if (!request) {
    return
  }

  switch (request.message) {
    case 'start':
      startDeepZone()
      break

    case 'stop':
      chrome.webRequest.onBeforeRequest.removeListener(redirectToBlockPage)
      restoreTabs(closedTabs)
      break

    default:
      break
  }
})
