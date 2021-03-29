import { SearchEngines } from '../data'

export default function getSearchEngineFromId(id: SearchEngineId | string): SearchEngine {
  return (
    SearchEngines.find(eng => {
      return eng.id === id
    }) || SearchEngines.find(eng => eng.id === 'g')
  )
}
