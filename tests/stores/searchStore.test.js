import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSearchStore } from '../../src/store/searchStore'

describe('Search Store', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useSearchStore()
  })

  it('should have an empty initial query', () => {
    expect(store.query).toBe('')
  })

  it('should update the query using setQuery', () => {
    store.setQuery('vue.js')
    expect(store.query).toBe('vue.js')
  })

  it('should overwrite the query when called again', () => {
    store.setQuery('vue.js')
    store.setQuery('pinia')
    expect(store.query).toBe('pinia')
  })
})
