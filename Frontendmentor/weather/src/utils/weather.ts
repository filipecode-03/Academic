import drizzleIcon from '../assets/images/icon-drizzle.webp'
import fogIcon from '../assets/images/icon-fog.webp'
import overcastIcon from '../assets/images/icon-overcast.webp'
import partlyCloudyIcon from '../assets/images/icon-partly-cloudy.webp'
import rainIcon from '../assets/images/icon-rain.webp'
import snowIcon from '../assets/images/icon-snow.webp'
import stormIcon from '../assets/images/icon-storm.webp'
import sunnyIcon from '../assets/images/icon-sunny.webp'
import type {
  PrecipitationUnit,
  TemperatureUnit,
  UnitSettings,
  WindUnit,
} from '../types/weather'

const weatherGroups = [
  { codes: [0], icon: sunnyIcon, label: 'Clear sky' },
  { codes: [1, 2], icon: partlyCloudyIcon, label: 'Partly cloudy' },
  { codes: [3], icon: overcastIcon, label: 'Overcast' },
  { codes: [45, 48], icon: fogIcon, label: 'Fog' },
  { codes: [51, 53, 55, 56, 57], icon: drizzleIcon, label: 'Drizzle' },
  {
    codes: [61, 63, 65, 66, 67, 80, 81, 82],
    icon: rainIcon,
    label: 'Rain',
  },
  { codes: [71, 73, 75, 77, 85, 86], icon: snowIcon, label: 'Snow' },
  { codes: [95, 96, 99], icon: stormIcon, label: 'Thunderstorm' },
] as const

export const getWeatherVisual = (code: number) =>
  weatherGroups.find((group) => group.codes.some((value) => value === code)) ??
  weatherGroups[2]

export const convertTemperature = (
  value: number,
  unit: TemperatureUnit,
) => (unit === 'fahrenheit' ? (value * 9) / 5 + 32 : value)

export const convertWind = (value: number, unit: WindUnit) =>
  unit === 'mph' ? value * 0.621371 : value

export const convertPrecipitation = (
  value: number,
  unit: PrecipitationUnit,
) => (unit === 'inch' ? value / 25.4 : value)

export const formatTemperature = (value: number, unit: TemperatureUnit) =>
  `${Math.round(convertTemperature(value, unit))}°`

export const formatWind = (value: number, unit: WindUnit) =>
  `${Math.round(convertWind(value, unit))} ${unit === 'kmh' ? 'km/h' : 'mph'}`

export const formatPrecipitation = (
  value: number,
  unit: PrecipitationUnit,
) => {
  const converted = convertPrecipitation(value, unit)
  const formatted = converted < 1 && converted > 0 ? converted.toFixed(1) : Math.round(converted)
  return `${formatted} ${unit === 'mm' ? 'mm' : 'in'}`
}

export const isMetric = (units: UnitSettings) =>
  units.temperature === 'celsius' &&
  units.wind === 'kmh' &&
  units.precipitation === 'mm'

export const formatDay = (isoDate: string, format: 'short' | 'long') => {
  const date = new Date(`${isoDate}T12:00:00`)
  return new Intl.DateTimeFormat('en', { weekday: format }).format(date)
}

export const formatLongDate = (isoDateTime: string) => {
  const datePart = isoDateTime.slice(0, 10)
  const date = new Date(`${datePart}T12:00:00`)
  return new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

export const formatHour = (isoDateTime: string) => {
  const hour = Number(isoDateTime.slice(11, 13))
  const normalized = hour % 12 || 12
  return `${normalized} ${hour >= 12 ? 'PM' : 'AM'}`
}

