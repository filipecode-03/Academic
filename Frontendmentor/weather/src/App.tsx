import { useCallback, useEffect, useRef, useState } from 'react'
import errorIcon from './assets/images/icon-error.svg'
import retryIcon from './assets/images/icon-retry.svg'
import logo from './assets/images/logo.svg'
import { SearchForm } from './components/SearchForm'
import { UnitsMenu } from './components/UnitsMenu'
import { LoadingDashboard, WeatherDashboard } from './components/WeatherDashboard'
import { getWeather } from './services/weatherApi'
import type { LocationResult, UnitSettings, WeatherResponse } from './types/weather'

const INITIAL_LOCATION: LocationResult = {
  id: 2950159,
  name: 'Berlin',
  latitude: 52.52437,
  longitude: 13.41053,
  country: 'Germany',
  admin1: 'Berlin',
  timezone: 'Europe/Berlin',
}

type ViewState = 'loading' | 'ready' | 'no-results' | 'error'

function App() {
  const [units, setUnits] = useState<UnitSettings>({
    temperature: 'celsius',
    wind: 'kmh',
    precipitation: 'mm',
  })
  const [location, setLocation] = useState<LocationResult>(INITIAL_LOCATION)
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [viewState, setViewState] = useState<ViewState>('loading')
  const requestRef = useRef<AbortController | null>(null)

  const loadWeather = useCallback(async (nextLocation: LocationResult) => {
    requestRef.current?.abort()
    const controller = new AbortController()
    requestRef.current = controller
    setLocation(nextLocation)
    setViewState('loading')

    try {
      const forecast = await getWeather(nextLocation, controller.signal)
      setWeather(forecast)
      setViewState('ready')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      setViewState('error')
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    requestRef.current = controller

    void getWeather(INITIAL_LOCATION, controller.signal)
      .then((forecast) => {
        setWeather(forecast)
        setViewState('ready')
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setViewState('error')
      })

    return () => controller.abort()
  }, [])

  return (
    <div className="min-h-screen bg-app text-white">
      <header className="mx-auto flex w-full max-w-[1216px] items-center justify-between px-4 pt-4 sm:px-6 sm:pt-8 lg:px-0 lg:pt-12">
        <a href="/" aria-label="Weather Now home" className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <img className="h-auto w-[137px] sm:w-[197px]" src={logo} alt="Weather Now" />
        </a>
        <UnitsMenu units={units} onChange={setUnits} />
      </header>

      {viewState === 'error' ? (
        <main className="mx-auto flex max-w-2xl flex-col items-center px-5 pt-28 text-center sm:pt-32">
          <img className="size-12" src={errorIcon} alt="" aria-hidden="true" />
          <h1 className="mt-8 font-display text-4xl font-bold sm:text-5xl">Something went wrong</h1>
          <p className="mt-6 max-w-xl text-base leading-6 text-muted sm:text-lg">
            We couldn’t connect to the server (API error). Please try again in a few moments.
          </p>
          <button
            type="button"
            className="mt-7 flex items-center gap-2 rounded-lg bg-panel px-4 py-3 text-sm font-semibold hover:bg-panel-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => void loadWeather(location)}
          >
            <img src={retryIcon} alt="" aria-hidden="true" />
            Retry
          </button>
        </main>
      ) : (
        <main className="mx-auto w-full max-w-[1216px] px-4 pb-12 sm:px-6 lg:px-0">
          <h1 className="mx-auto mt-8 max-w-[260px] text-center font-display text-[2.75rem] font-bold leading-[1.18] tracking-[-0.03em] sm:mt-16 sm:max-w-4xl sm:text-5xl lg:mt-17 lg:text-[3.25rem]">
            How’s the sky looking today?
          </h1>

          <div className="mt-12 sm:mt-14">
            <SearchForm
              onSelect={(nextLocation) => void loadWeather(nextLocation)}
              onNoResults={() => setViewState('no-results')}
            />
          </div>

          {viewState === 'no-results' ? (
            <p className="mt-12 text-center font-display text-2xl font-bold" role="status">
              No search result found!
            </p>
          ) : viewState === 'loading' ? (
            <LoadingDashboard />
          ) : weather ? (
            <WeatherDashboard key={location.id} location={location} weather={weather} units={units} />
          ) : null}
        </main>
      )}
    </div>
  )
}

export default App
