import { useEffect, useState } from 'react'

const KEYBOARD_MAPPINGS = {
  KeyW: 'moveForward',
  KeyA: 'moveLeft',
  KeyS: 'moveBackward',
  KeyD: 'moveRight',
  Space: 'jump',
  ShiftLeft: 'sprint',
  ShiftRight: 'sprint'
} as const
type Action = typeof KEYBOARD_MAPPINGS[keyof typeof KEYBOARD_MAPPINGS]
type KeyboardState = Record<Action, boolean>

export function userKeyboard (): KeyboardState {
  const state: KeyboardState = {
    moveForward: false,
    moveLeft: false,
    moveBackward: false,
    moveRight: false,
    sprint: false,
    jump: false
  }
  const [actions, setActions] = useState(state)

  useEffect(() => {
    function handleKey (value: boolean) {
      return ({ code }: KeyboardEvent) => {
        const action = KEYBOARD_MAPPINGS[code] as Action | undefined

        if (
          action !== undefined
        ) {
          setActions((prev) => ({ ...prev, [action]: value }))
        }
      }
    }
    const handleKeyDown = handleKey(true)
    const handleKeyUp = handleKey(false)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return actions
}
