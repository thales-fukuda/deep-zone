import { closeTabs, restoreTabs } from './utils'

const { storage, webRequest, runtime } = chrome
const redirectUrl = runtime.getURL('/blockPage.html')
let closedTabs: string[] = []

const redirectToBlockPage = () => {
  return {
    redirectUrl,
  }
}

const startDeepZone = () => {
  storage.sync.get(['blacklisted'], result => {
    const blacklist = result.blacklisted

    if (!blacklist) {
      return
    }

    storage.local.set({ deepZoneActive: true })

    closeTabs(blacklist, list => {
      closedTabs = list
    })

    webRequest.onBeforeRequest.addListener(
      redirectToBlockPage,
      { urls: blacklist, types: ['main_frame'] },
      ['blocking']
    )
  })
}

const stopDeepZone = () => {
  storage.local.set({ deepZoneActive: false })
  webRequest.onBeforeRequest.removeListener(redirectToBlockPage)
  restoreTabs(closedTabs)
}

runtime.onMessage.addListener(request => {
  switch (request.message) {
    case 'start':
      startDeepZone()
      break

    case 'stop':
      stopDeepZone()
      break

    default:
      break
  }
})
