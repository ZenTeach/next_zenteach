import ReactGA from 'react-ga'

const ANALYTICS_ID = process.env.GA_ANALYTICS

export const initGA = () => {
  ReactGA.initialize(ANALYTICS_ID)
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logWebVitals = (metric) => {
	ReactGA.event({
		category: metric.category,
		action: metric.name,
		value: metric.value,
		label: metric.label,
		nonInteraction: metric.non_interaction
 	})
}


export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
