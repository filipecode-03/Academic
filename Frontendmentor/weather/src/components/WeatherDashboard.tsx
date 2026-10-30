import { useState } from 'react'
import bgTodayLarge from '../assets/images/bg-today-large.svg'
import bgTodaySmall from '../assets/images/bg-today-small.svg'
import loadingIcon from '../assets/images/icon-loading.svg'
import type { LocationResult, UnitSettings, WeatherResponse } from '../types/weather'
import {
  formatDay,
  formatHour,
  formatLongDate,
  formatPrecipitation,
  formatTemperature,
  formatWind,
  getWeatherVisual,
} from '../utils/weather'

type WeatherDashboardProps = {
  location: LocationResult
  weather: WeatherResponse
  units: UnitSettings
}

type MetricCardProps = {
  label: string
  value: string
}

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="min-h-28 rounded-xl border border-white/10 bg-panel p-4 sm:min-h-30 sm:p-5">
      <p className="text-sm text-muted sm:text-base">{label}</p>
      <p className="mt-5 text-2xl font-light tracking-tight text-white sm:text-[1.75rem]">{value}</p>
    </div>
  )
}

export function WeatherDashboard({ location, weather, units }: WeatherDashboardProps) {
  const [selectedDay, setSelectedDay] = useState(weather.daily.time[0] ?? '')
  const currentVisual = getWeatherVisual(weather.current.weather_code)

  const hourlyForecast = (() => {
    const currentHour = Number(weather.current.time.slice(11, 13))
    const currentDate = weather.current.time.slice(0, 10)

    return weather.hourly.time.flatMap((time, index) => {
      const date = time.slice(0, 10)
      const hour = Number(time.slice(11, 13))
      if (date !== selectedDay || (date === currentDate && hour < currentHour)) return []

      return [
        {
          time,
          temperature: weather.hourly.temperature_2m[index],
          weatherCode: weather.hourly.weather_code[index],
          isDay: weather.hourly.is_day[index],
        },
      ]
    })
  })()

  const locationName = [location.name, location.country].filter(Boolean).join(', ')

  return (
    <div className="mt-6 grid items-start gap-8 sm:mt-12 lg:grid-cols-[minmax(0,800px)_384px] lg:gap-8">
      <div className="min-w-0">
        <section
          className="relative flex min-h-[286px] items-center justify-center overflow-hidden rounded-[1.25rem] px-5 py-8 text-center sm:px-8 lg:justify-between lg:px-6 xl:px-8"
          aria-labelledby="current-weather-title"
        >
          <picture className="absolute inset-0">
            <source media="(min-width: 640px)" srcSet={bgTodayLarge} />
            <img className="size-full object-cover" src={bgTodaySmall} alt="" />
          </picture>

          <div className="relative z-10 flex w-full flex-col items-center gap-7 lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 id="current-weather-title" className="text-2xl font-bold text-white">
                {locationName}
              </h2>
              <p className="mt-2 text-base text-[#D4D3D9]">{formatLongDate(weather.current.time)}</p>
            </div>

            <div className="flex items-center justify-center gap-4 lg:gap-7">
              <img
                className="size-24 object-contain sm:size-28"
                src={currentVisual.icon}
                alt={currentVisual.label}
              />
              <p className="text-[5.5rem] font-semibold italic leading-none tracking-[-0.06em] text-white sm:text-[6rem]">
                {formatTemperature(weather.current.temperature_2m, units.temperature)}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6" aria-label="Current weather details">
          <MetricCard
            label="Feels Like"
            value={formatTemperature(weather.current.apparent_temperature, units.temperature)}
          />
          <MetricCard label="Humidity" value={`${Math.round(weather.current.relative_humidity_2m)}%`} />
          <MetricCard label="Wind" value={formatWind(weather.current.wind_speed_10m, units.wind)} />
          <MetricCard
            label="Precipitation"
            value={formatPrecipitation(weather.current.precipitation, units.precipitation)}
          />
        </section>

        <section className="mt-10" aria-labelledby="daily-forecast-title">
          <h2 id="daily-forecast-title" className="text-lg font-semibold text-white">
            Daily forecast
          </h2>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7 lg:gap-4">
            {weather.daily.time.map((date, index) => {
              const visual = getWeatherVisual(weather.daily.weather_code[index])
              return (
                <article
                  key={date}
                  className="flex min-h-42 flex-col items-center justify-between rounded-xl border border-white/10 bg-panel px-2 py-4 text-white"
                >
                  <h3 className="text-base font-medium">{formatDay(date, 'short')}</h3>
                  <img className="size-14 object-contain" src={visual.icon} alt={visual.label} />
                  <div className="flex w-full justify-between gap-2 text-sm">
                    <span>{formatTemperature(weather.daily.temperature_2m_max[index], units.temperature)}</span>
                    <span className="text-[#D4D3D9]">
                      {formatTemperature(weather.daily.temperature_2m_min[index], units.temperature)}
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>

      <section
        className="rounded-[1.25rem] bg-panel p-3 sm:p-5 lg:sticky lg:top-6"
        aria-labelledby="hourly-forecast-title"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 id="hourly-forecast-title" className="text-lg font-semibold text-white">
            Hourly forecast
          </h2>
          <label className="sr-only" htmlFor="forecast-day">
            Forecast day
          </label>
          <select
            id="forecast-day"
            className="h-10 cursor-pointer rounded-lg border-r-8 border-transparent bg-panel-light px-3 text-sm font-medium text-white outline-none focus-visible:ring-2 focus-visible:ring-white"
            value={selectedDay}
            onChange={(event) => setSelectedDay(event.target.value)}
          >
            {weather.daily.time.map((date) => (
              <option key={date} value={date}>
                {formatDay(date, 'long')}
              </option>
            ))}
          </select>
        </div>

        <div className="weather-scrollbar mt-4 max-h-[632px] space-y-3 overflow-y-auto pr-1">
          {hourlyForecast.length ? (
            hourlyForecast.map((hour) => {
              const visual = getWeatherVisual(hour.weatherCode)
              return (
                <article
                  key={hour.time}
                  className="flex min-h-[60px] items-center gap-3 rounded-lg border border-white/10 bg-panel-light px-4 text-white"
                >
                  <img className="size-10 object-contain" src={visual.icon} alt={visual.label} />
                  <time className="text-lg font-medium" dateTime={hour.time}>
                    {formatHour(hour.time)}
                  </time>
                  <span className="ml-auto text-base">
                    {formatTemperature(hour.temperature, units.temperature)}
                  </span>
                </article>
              )
            })
          ) : (
            <p className="py-10 text-center text-sm text-muted">No hourly data available.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export function LoadingDashboard() {
  return (
    <div className="mt-6 grid items-start gap-8 sm:mt-12 lg:grid-cols-[minmax(0,800px)_384px]">
      <div>
        <div className="flex min-h-[286px] items-center justify-center rounded-[1.25rem] bg-panel" role="status">
          <div className="text-center text-sm text-white">
            <img className="mx-auto mb-3 size-6 animate-spin" src={loadingIcon} alt="" />
            Loading...
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
          {['Feels Like', 'Humidity', 'Wind', 'Precipitation'].map((label) => (
            <MetricCard key={label} label={label} value="–" />
          ))}
        </div>
        <h2 className="mt-10 text-lg font-semibold text-white">Daily forecast</h2>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7 lg:gap-4" aria-hidden="true">
          {Array.from({ length: 7 }, (_, index) => (
            <div key={index} className="min-h-42 animate-pulse rounded-xl bg-panel" />
          ))}
        </div>
      </div>

      <section className="rounded-[1.25rem] bg-panel p-3 sm:p-5" aria-label="Hourly forecast loading">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Hourly forecast</h2>
          <span className="rounded-lg bg-panel-light px-4 py-2 text-white">–</span>
        </div>
        <div className="mt-4 space-y-3" aria-hidden="true">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="min-h-[60px] animate-pulse rounded-lg bg-panel-light" />
          ))}
        </div>
      </section>
    </div>
  )
}

