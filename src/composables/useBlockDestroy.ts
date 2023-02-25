/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThreeEvent } from '@react-three/fiber'
import { useState } from 'react'
import { Texture } from 'three'
import { destroyStates } from '../models/Textures'

export type onDestroy = () => void
export interface useBlockDestroyReturn {
  texture: Texture | null
  destroyPercentage: number
  onPointerDown: (event: ThreeEvent<MouseEvent>) => void
  onPointerUp: (event: ThreeEvent<MouseEvent>) => void
}

export function useBlockDestroy (onDestroy: onDestroy, interval: number = 500): useBlockDestroyReturn {
  const [{ texture, destroyPercentage }, setState] = useState<{
    texture: Texture | null
    destroyPercentage: number
  }>({
    texture: null,
    destroyPercentage: 0
  })
  const [_, setIntervalId] = useState<number | undefined>(undefined)

  const onPointerDown = ({ stopPropagation }: ThreeEvent<MouseEvent>): void => {
    stopPropagation()

    setIntervalId(intervalId => {
      clearInterval(intervalId)
      return undefined
    })
    setState({
      texture: destroyStates[0],
      destroyPercentage: 10
    })

    setIntervalId(setInterval(
      () => {
        setState((prevState) => {
          const { destroyPercentage } = prevState

          if (destroyPercentage === 100) {
            setIntervalId(intervalId => {
              clearInterval(intervalId)
              return undefined
            })
            // onDestroy() // FIX: breaks
            return prevState
          }

          const state = {
            texture: destroyStates[destroyPercentage / 10],
            destroyPercentage: destroyPercentage + 10
          }

          return state
        })
      }, interval
    ))
  }

  const onPointerUp = ({ stopPropagation }: ThreeEvent<MouseEvent>): void => {
    stopPropagation()

    setIntervalId(intervalId => {
      clearInterval(intervalId)
      return undefined
    })
    setState({
      texture: null,
      destroyPercentage: 0
    })
  }

  return {
    texture,
    destroyPercentage,
    onPointerDown,
    onPointerUp
  }
}
