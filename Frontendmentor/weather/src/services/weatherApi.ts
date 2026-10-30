import type { LocationResult, WeatherResponse } from '../types/weather'

const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast'

type GeocodingResponse = {
  results?: LocationResult[]
}

const assertOk = async (response: Response) => {
  if (!response.ok) {
    const error = (await response.json().catch(() => null)) as
      | { reason?: string }
      | null

    throw new Error(error?.reason ?? `Request failed (${response.status})`)
  }
}

export const searchLocations = async (
  query: string,
  signal?: AbortSignal,
): Promise<LocationResult[]> => {
  const params = new URLSearchParams({
    name: query.trim(),
    count: '5',
    language: 'en',
    format: 'json',
  })
  const response = await fetch(`${GEOCODING_URL}?${params}`, { signal })
  await assertOk(response)
  const data = (await response.json()) as GeocodingResponse

  return data.results ?? []
}

export const getWeather = async (
  location: LocationResult,
  signal?: AbortSignal,
): Promise<WeatherResponse> => {
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    timezone: 'auto',
    forecast_days: '7',
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,is_day',
    hourly: 'temperature_2m,weather_code,is_day',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
  })
  const response = await fetch(`${FORECAST_URL}?${params}`, { signal })
  await assertOk(response)

  return (await response.json()) as WeatherResponse
}

