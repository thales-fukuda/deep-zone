import { Tab, TabQuery } from '../types'

export const closeTabs = (
  query: TabQuery,
  callback: (list: string[]) => void
) => {
  chrome.tabs.query(query, tabs => {
    let closedTabs: string[] = []

    tabs.forEach((tab: Tab) => {
      const { id, url } = tab

      if (!id || !url) {
        return
      }

      chrome.tabs.remove(id)
      closedTabs = [...closedTabs, url]
    })

    callback(closedTabs)
  })
}
