import { useEffect, useRef, useState } from 'react'
import checkmarkIcon from '../assets/images/icon-checkmark.svg'
import dropdownIcon from '../assets/images/icon-dropdown.svg'
import unitsIcon from '../assets/images/icon-units.svg'
import type {
  PrecipitationUnit,
  TemperatureUnit,
  UnitSettings,
  WindUnit,
} from '../types/weather'
import { isMetric } from '../utils/weather'

type UnitsMenuProps = {
  units: UnitSettings
  onChange: (units: UnitSettings) => void
}

type UnitOptionProps = {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}

function UnitOption({ active, children, onClick }: UnitOptionProps) {
  return (
    <button
      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-panel-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${active ? 'bg-panel-light' : ''}`}
      type="button"
      role="menuitemradio"
      aria-checked={active}
      onClick={onClick}
    >
      <span>{children}</span>
      {active && <img src={checkmarkIcon} alt="" aria-hidden="true" />}
    </button>
  )
}

export function UnitsMenu({ units, onChange }: UnitsMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const metric = isMetric(units)

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const updateTemperature = (temperature: TemperatureUnit) =>
    onChange({ ...units, temperature })
  const updateWind = (wind: WindUnit) => onChange({ ...units, wind })
  const updatePrecipitation = (precipitation: PrecipitationUnit) =>
    onChange({ ...units, precipitation })

  return (
    <div ref={containerRef} className="relative z-30">
      <button
        ref={triggerRef}
        type="button"
        className="flex min-h-11 items-center gap-2 rounded-lg bg-panel px-3.5 text-sm font-medium text-white transition-colors hover:bg-panel-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <img src={unitsIcon} alt="" aria-hidden="true" />
        <span>Units</span>
        <img
          className={`ml-0.5 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          src={dropdownIcon}
          alt=""
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-[calc(100%+0.5rem)] w-56 rounded-xl border border-white/10 bg-panel p-2 text-white shadow-2xl"
          role="menu"
          aria-label="Measurement units"
        >
          <button
            type="button"
            role="menuitem"
            className="mb-1 w-full rounded-lg px-3 py-2 text-left text-sm font-semibold hover:bg-panel-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            onClick={() =>
              onChange(
                metric
                  ? {
                      temperature: 'fahrenheit',
                      wind: 'mph',
                      precipitation: 'inch',
                    }
                  : {
                      temperature: 'celsius',
                      wind: 'kmh',
                      precipitation: 'mm',
                    },
              )
            }
          >
            Switch to {metric ? 'Imperial' : 'Metric'}
          </button>

          <div className="space-y-1 border-b border-white/10 pb-2" role="group" aria-label="Temperature">
            <p className="px-3 pt-1 text-xs text-muted">Temperature</p>
            <UnitOption active={units.temperature === 'celsius'} onClick={() => updateTemperature('celsius')}>
              Celsius (°C)
            </UnitOption>
            <UnitOption active={units.temperature === 'fahrenheit'} onClick={() => updateTemperature('fahrenheit')}>
              Fahrenheit (°F)
            </UnitOption>
          </div>

          <div className="space-y-1 border-b border-white/10 py-2" role="group" aria-label="Wind speed">
            <p className="px-3 text-xs text-muted">Wind Speed</p>
            <UnitOption active={units.wind === 'kmh'} onClick={() => updateWind('kmh')}>
              km/h
            </UnitOption>
            <UnitOption active={units.wind === 'mph'} onClick={() => updateWind('mph')}>
              mph
            </UnitOption>
          </div>

          <div className="space-y-1 pt-2" role="group" aria-label="Precipitation">
            <p className="px-3 text-xs text-muted">Precipitation</p>
            <UnitOption active={units.precipitation === 'mm'} onClick={() => updatePrecipitation('mm')}>
              Millimeters (mm)
            </UnitOption>
            <UnitOption active={units.precipitation === 'inch'} onClick={() => updatePrecipitation('inch')}>
              Inches (in)
            </UnitOption>
          </div>
        </div>
      )}
    </div>
  )
}

