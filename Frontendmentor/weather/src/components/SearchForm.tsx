import { useEffect, useRef, useState } from 'react'
import loadingIcon from '../assets/images/icon-loading.svg'
import searchIcon from '../assets/images/icon-search.svg'
import { searchLocations } from '../services/weatherApi'
import type { LocationResult } from '../types/weather'

type SearchFormProps = {
  onSelect: (location: LocationResult) => void
  onNoResults: () => void
}

type SearchState = 'idle' | 'loading' | 'ready' | 'empty'

const locationLabel = (location: LocationResult) =>
  [location.name, location.admin1, location.country]
    .filter((part, index, values) => part && values.indexOf(part) === index)
    .join(', ')

export function SearchForm({ onSelect, onNoResults }: SearchFormProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<LocationResult[]>([])
  const [state, setState] = useState<SearchState>('idle')
  const [isFocused, setIsFocused] = useState(false)
  const suggestionRequestRef = useRef<AbortController | null>(null)
  const submitRequestRef = useRef<AbortController | null>(null)
  const isSubmittingRef = useRef(false)

  useEffect(() => {
    const trimmed = query.trim()
    if (!isFocused || trimmed.length < 2) return

    const timeout = window.setTimeout(async () => {
      if (isSubmittingRef.current) return

      suggestionRequestRef.current?.abort()
      const controller = new AbortController()
      suggestionRequestRef.current = controller

      try {
        const locations = await searchLocations(trimmed, controller.signal)
        setResults(locations)
        setState(locations.length ? 'ready' : 'empty')
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setResults([])
        setState('empty')
      }
    }, 350)

    return () => {
      window.clearTimeout(timeout)
      suggestionRequestRef.current?.abort()
    }
  }, [isFocused, query])

  const chooseLocation = (location: LocationResult) => {
    isSubmittingRef.current = false
    suggestionRequestRef.current?.abort()
    setQuery(locationLabel(location))
    setResults([])
    setState('idle')
    setIsFocused(false)
    onSelect(location)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = query.trim()
    if (trimmed.length < 2) {
      onNoResults()
      return
    }

    if (results[0]) {
      chooseLocation(results[0])
      return
    }

    isSubmittingRef.current = true
    suggestionRequestRef.current?.abort()
    submitRequestRef.current?.abort()
    const controller = new AbortController()
    submitRequestRef.current = controller
    setState('loading')

    try {
      const locations = await searchLocations(trimmed, controller.signal)
      if (locations[0]) chooseLocation(locations[0])
      else {
        isSubmittingRef.current = false
        setState('empty')
        onNoResults()
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      isSubmittingRef.current = false
      setState('empty')
      onNoResults()
    }
  }

  const showDropdown = isFocused && (state === 'loading' || results.length > 0)

  return (
    <form
      className="relative z-20 mx-auto flex w-full max-w-[656px] flex-col gap-3 sm:flex-row"
      role="search"
      onSubmit={handleSubmit}
    >
      <div className="relative min-w-0 flex-1">
        <label htmlFor="location-search" className="sr-only">
          Search for a place
        </label>
        <img
          className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2"
          src={searchIcon}
          alt=""
          aria-hidden="true"
        />
        <input
          id="location-search"
          type="search"
          className="h-12 w-full rounded-xl bg-panel pl-14 pr-4 text-base text-white placeholder:text-[#D4D3D9] hover:bg-panel-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-14"
          placeholder="Search for a place..."
          value={query}
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls="location-results"
          aria-expanded={showDropdown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => window.setTimeout(() => setIsFocused(false), 120)}
          onChange={(event) => {
            const value = event.target.value
            isSubmittingRef.current = false
            submitRequestRef.current?.abort()
            setIsFocused(true)
            setQuery(value)
            setResults([])
            setState(value.trim().length >= 2 ? 'loading' : 'idle')
          }}
        />

        {showDropdown && (
          <div
            id="location-results"
            className="absolute left-0 top-[calc(100%+0.5rem)] w-full rounded-xl border border-white/10 bg-panel p-2 text-left shadow-2xl"
            role="listbox"
          >
            {state === 'loading' ? (
              <div className="flex items-center gap-3 px-2 py-2 text-sm text-white" role="status">
                <img className="size-4 animate-spin" src={loadingIcon} alt="" />
                Search in progress
              </div>
            ) : (
              results.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  role="option"
                  aria-selected="false"
                  className="block w-full rounded-lg px-2 py-2 text-left text-sm text-white hover:bg-panel-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => chooseLocation(location)}
                >
                  {locationLabel(location)}
                </button>
              ))
            )}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="h-12 shrink-0 rounded-xl bg-brand px-7 font-semibold text-white transition-colors hover:bg-[#2F3FC5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-px sm:h-14 sm:min-w-28"
      >
        Search
      </button>
    </form>
  )
}

