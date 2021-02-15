export {}

declare global {
  export type SearchEngineId = 'g' | 'ddg'

  export interface SearchEngine {
    name: string
    /**
     * Creates the URL for a specified query to the search provider
     */
    createSearchUrl: (q: string) => string
    /**
     * Creates the URL for a specified query via LMRGTFY
     */
    createLmrgtfyUrl: (q: string) => string
    id: SearchEngineId
  }
}
