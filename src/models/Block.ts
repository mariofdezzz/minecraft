import { BlockTypes } from './BlockTypes'

export interface Block {
  position: [number, number, number]
  type: typeof BlockTypes[keyof typeof BlockTypes]
}
