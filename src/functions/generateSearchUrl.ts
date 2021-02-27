import getSearchEngineFromId from './getSearchEngineFromId'

export default function generateSearchUrl(query: string, searchEngineId: SearchEngineId): string {
  const searchEngine = getSearchEngineFromId(searchEngineId)
  return searchEngine.createSearchUrl(query)
}
