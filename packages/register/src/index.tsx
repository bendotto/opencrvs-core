import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import { App } from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from './store'
import * as actions from 'src/notification/actions'
import { storage } from 'src/storage'
import * as Sentry from '@sentry/browser'
import * as LogRocket from 'logrocket'
import { SubmissionController } from './SubmissionControllerApp'

storage.configStorage('OpenCRVS')

// Injecting global styles for the body tag - used only once
// tslint:disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    overflow-y:overlay;
  }
`

const { store, history } = createStore()

if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
  // setup error reporting using sentry
  Sentry.init({
    dsn: 'https://8f6ba426b20045f1b91528d5fdc214b5@sentry.io/1401900'
  })

  // setup log rocket to ship log messages and record user errors
  LogRocket.init('hxf1hb/opencrvs')

  // Integrate the two
  Sentry.configureScope(scope => {
    scope.addEventProcessor(async event => {
      if (!event.extra) {
        event.extra = {}
      }
      const sessionUrl = await new Promise(resolve => {
        LogRocket.getSessionURL(url => {
          resolve(url)
        })
      })
      event.extra.sessionURL = sessionUrl
      return event
    })
  })
}

function onNewConentAvailable(waitingSW: ServiceWorker) {
  const action = actions.showNewContentAvailableNotification(waitingSW)
  store.dispatch(action)
}

function onBackGroundSync() {
  const channel = new BroadcastChannel(
    window.config.BACKGROUND_SYNC_BROADCAST_CHANNEL
  )
  channel.onmessage = e => {
    const syncCount = typeof e.data === 'number' ? e.data : 0
    const action = actions.showBackgroundSyncedNotification(syncCount)
    store.dispatch(action)
  }
}

onBackGroundSync()

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
)

registerServiceWorker(onNewConentAvailable)
new SubmissionController(store).start()
