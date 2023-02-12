import { create } from 'zustand'

export interface Cube {
  position: [number, number, number]
}

export interface CubeStore {
  cubes: Cube[]
}

const cubes: Cube[] = []

const SIZE = 16
const POS = SIZE / 2

for (let i = -POS; i < POS; i++) {
  for (let j = -POS; j < POS; j++) {
    cubes.push({
      position: [i, -1, j]
    })
  }
}

export const useCubeStore = create((set): CubeStore => ({
  cubes
}))
