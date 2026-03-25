import { createContext, useContext, useReducer, useEffect } from 'react'
import { loadState, saveState } from '../utils/storage'

// 20 primary teeth A–T
const ALL_TEETH = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T']

const BADGE_DEFS = [
  { id: 'first_brush',    emoji: '🦷', name: 'First Brush',     desc: 'Completed the timer once' },
  { id: 'three_day',      emoji: '🔥', name: '3-Day Streak',    desc: '3 days in a row!' },
  { id: 'seven_day',      emoji: '🌟', name: '7-Day Streak',    desc: '7 days in a row!' },
  { id: 'teeth_explorer', emoji: '🗺️', name: 'Teeth Explorer',  desc: 'Brushed all 20 teeth' },
  { id: 'super_brusher',  emoji: '🏆', name: 'Super Brusher',   desc: '30 days in a row!' },
]

function todayStr() {
  return new Date().toISOString().slice(0, 10) // 'YYYY-MM-DD'
}

function yesterday(dateStr) {
  const d = new Date(dateStr)
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

function buildInitialState() {
  return {
    stars: 0,
    streak: 0,
    lastBrushed: null,          // 'YYYY-MM-DD'
    brushHistory: [],           // array of 'YYYY-MM-DD' strings
    earnedBadges: [],           // array of badge ids
    brushedTeeth: [],           // array of tooth letters currently brushed
  }
}

function computeBadges(state) {
  const earned = [...state.earnedBadges]
  const add = (id) => { if (!earned.includes(id)) earned.push(id) }

  if (state.stars >= 1) add('first_brush')
  if (state.streak >= 3) add('three_day')
  if (state.streak >= 7) add('seven_day')
  if (state.streak >= 30) add('super_brusher')
  if (ALL_TEETH.every(t => state.brushedTeeth.includes(t))) add('teeth_explorer')

  return earned
}

function reducer(state, action) {
  switch (action.type) {
    case 'COMPLETE_BRUSH': {
      const today = todayStr()
      const alreadyToday = state.lastBrushed === today
      if (alreadyToday) return state // don't double-count same day

      const newStreak = state.lastBrushed === yesterday(today)
        ? state.streak + 1
        : 1

      const newHistory = state.brushHistory.includes(today)
        ? state.brushHistory
        : [...state.brushHistory, today]

      const next = {
        ...state,
        stars: state.stars + 1,
        streak: newStreak,
        lastBrushed: today,
        brushHistory: newHistory,
      }
      next.earnedBadges = computeBadges(next)
      return next
    }

    case 'TOGGLE_TOOTH': {
      const { id } = action
      const brushedTeeth = state.brushedTeeth.includes(id)
        ? state.brushedTeeth.filter(t => t !== id)
        : [...state.brushedTeeth, id]
      const next = { ...state, brushedTeeth }
      next.earnedBadges = computeBadges(next)
      return next
    }

    case 'BRUSH_ALL_TEETH': {
      const next = { ...state, brushedTeeth: [...ALL_TEETH] }
      next.earnedBadges = computeBadges(next)
      return next
    }

    case 'RESET_TEETH': {
      return { ...state, brushedTeeth: [] }
    }

    default:
      return state
  }
}

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const saved = loadState()
  const [state, dispatch] = useReducer(reducer, saved || buildInitialState())

  useEffect(() => {
    saveState(state)
  }, [state])

  const completeBrush = () => dispatch({ type: 'COMPLETE_BRUSH' })
  const toggleTooth = (id) => dispatch({ type: 'TOGGLE_TOOTH', id })
  const brushAllTeeth = () => dispatch({ type: 'BRUSH_ALL_TEETH' })
  const resetTeeth = () => dispatch({ type: 'RESET_TEETH' })

  return (
    <AppContext.Provider value={{ state, completeBrush, toggleTooth, brushAllTeeth, resetTeeth, BADGE_DEFS, ALL_TEETH }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
