export type TemperatureUnit = 'celsius' | 'fahrenheit'
export type WindUnit = 'kmh' | 'mph'
export type PrecipitationUnit = 'mm' | 'inch'

export type UnitSettings = {
  temperature: TemperatureUnit
  wind: WindUnit
  precipitation: PrecipitationUnit
}

export type LocationResult = {
  id: number
  name: string
  latitude: number
  longitude: number
  country?: string
  admin1?: string
  timezone: string
}

export type WeatherResponse = {
  timezone: string
  current: {
    time: string
    temperature_2m: number
    relative_humidity_2m: number
    apparent_temperature: number
    precipitation: number
    weather_code: number
    wind_speed_10m: number
    is_day: number
  }
  hourly: {
    time: string[]
    temperature_2m: number[]
    weather_code: number[]
    is_day: number[]
  }
  daily: {
    time: string[]
    weather_code: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
  }
}

