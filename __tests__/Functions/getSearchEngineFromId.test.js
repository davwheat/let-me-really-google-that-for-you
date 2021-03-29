import { SearchEngines } from '../../src/data'
import getSearchEngineFromId from '../../src/functions/getSearchEngineFromId'

describe('Get search engine from ID', () => {
  it('converts engines to IDs correctly', async () => {
    SearchEngines.forEach(se => {
      expect(getSearchEngineFromId(se.id)).toEqual(se)
    })
  })

  it('falls back to Google', async () => {
    expect(getSearchEngineFromId("doesn't exist")).toEqual(SearchEngines.find(se => se.id === 'g'))
  })
})
