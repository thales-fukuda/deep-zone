import { Tab } from '../types'

const { tabs } = chrome
/**
 * @param blacklist - array of URL patterns to check and close tabs that match
 * @param callback - callback function to handle closed tabs
 */
export const closeTabs = (
  blacklist: string[],
  callback?: (list: string[]) => void
) => {
  tabs.query({ url: blacklist }, result => {
    let closedTabs: string[] = []

    result.forEach((tab: Tab) => {
      const { id, url } = tab

      if (!id || !url) {
        return
      }

      tabs.remove(id)
      closedTabs = [...closedTabs, url]
    })

    if (callback) callback(closedTabs)
  })
}

/**
 * @param closedTabs - array of closed tabs to restore
 */
export const restoreTabs = (closedTabs: string[]) => {
  closedTabs.forEach((url: string) => {
    tabs.create({
      url,
    })
  })
}
