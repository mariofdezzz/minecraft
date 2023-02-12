import { create } from 'zustand'
import { Block } from '../models/Block'
import { BlockTypes } from '../models/BlockTypes'

export interface CubeStore {
  cubes: Block[]
}

const cubes: Block[] = []
const stairs: Block[] = []

const SIZE = 16
const POS = SIZE / 2

for (let i = -POS; i < POS; i++) {
  for (let j = -POS; j < POS; j++) {
    cubes.push({
      position: [i, -1, j],
      type: BlockTypes.Grass
    })
  }
}

for (let i = 0; i < 4; i++) {
  stairs.push({
    position: [2, i, -2 - i],
    type: BlockTypes.Grass
  })
}

export const useCubeStore = create((set): CubeStore => ({
  cubes: [
    ...cubes,
    ...stairs
  ]
}))
