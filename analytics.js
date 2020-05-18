/* analytics.js */
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
  plugins: [
    googleAnalytics({
      trackingId: 'UA-152803216-1',
    }),
  ],
})

/* Track a page view */
analytics.page()

//   /* Track a custom event */
//   analytics.track('playedVideo', {
//     category: 'Videos',
//     label: 'Fall Campaign',
//     value: 42
//   })

//   /* Identify a visitor */
//   analytics.identify('user-id-xyz', {
//     firstName: 'bill',
//     lastName: 'murray'
//   })

// Set to global so analytics plugin will work with Gatsby
if (typeof window !== 'undefined') {
  window.Analytics = analytics
}

/* export for consumption in your components for .track & .identify calls */
export default analytics
