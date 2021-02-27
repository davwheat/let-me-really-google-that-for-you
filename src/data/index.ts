import { blue } from '@material-ui/core/colors'

const Colors = {
  primary: blue[500],
  dark: '#203647',
  offWhite: '#fff',
} as const

const Breakpoints = {
  upTo: {
    large: '(max-width: 767px)',
    medium: '(max-width: 579px)',
  },
  downTo: {
    medium: '(min-width: 768px)',
    small: '(min-width: 580px)',
  },
} as const

const SearchEngines: SearchEngine[] = [
  {
    name: 'Google',
    id: 'g',
    createSearchUrl: query => `https://google.com/search?q=${encodeURI(query)}`,
    createLmrgtfyUrl: query => `https://${window.location.host}/?q=${encodeURI(query)}`,
    siteUrl: 'google.com',
  },
  {
    name: 'DuckDuckGo',
    id: 'ddg',
    createSearchUrl: query => `https://duckduckgo.com/?q=${encodeURI(query)}`,
    createLmrgtfyUrl: query => `https://${window.location.host}/?q=${encodeURI(query)}&se=ddg`,
    siteUrl: 'duckduckgo.com',
  },
]

const SearchEngineIds: SearchEngineId[] = SearchEngines.reduce((arr, se) => [...arr, se.id], [])

export { Colors, Breakpoints, SearchEngines, SearchEngineIds }
