import { useState } from 'react'
import { ThreeEvent } from '@react-three/fiber'

export function useMeshHovered (): useMeshHoveredReturn {
  const [isHovered, setIsHovered] = useState(false)

  const onPointerMove = ({ stopPropagation }: ThreeEvent<PointerEvent>): void => {
    stopPropagation()
    setIsHovered(true)
  }
  const onPointerOut = ({ stopPropagation }: ThreeEvent<PointerEvent>): void => {
    stopPropagation()
    setIsHovered(false)
  }

  return { isHovered, onPointerMove, onPointerOut }
}

interface useMeshHoveredReturn {
  isHovered: boolean
  onPointerMove: ({ stopPropagation }: ThreeEvent<PointerEvent>) => void
  onPointerOut: ({ stopPropagation }: ThreeEvent<PointerEvent>) => void
}
