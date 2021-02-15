import { SearchEngines } from '../data'

export default function getSearchEngineFromId(id: SearchEngineId | string): SearchEngine {
  return SearchEngines.find(eng => eng.id === id) || SearchEngines.find(eng => eng.id === 'g')
}
