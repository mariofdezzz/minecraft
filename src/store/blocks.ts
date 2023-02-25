import { create } from 'zustand'
import { Block } from '../models/Block'
import { BlockTypes } from '../models/BlockTypes'

export interface BlockStore {
  blocks: Block[]
  removeBlock: (block: Block) => void
}

const blocks: Block[] = []
const stairs: Block[] = []

const SIZE = 16
const POS = SIZE / 2

for (let i = -POS; i < POS; i++) {
  for (let j = -POS; j < POS; j++) {
    blocks.push({
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

export const useBlockStore = create<BlockStore>((set) => ({
  blocks: [
    ...blocks,
    ...stairs,
    {
      position: [-2, 0, -4],
      type: BlockTypes.OakLog
    },
    {
      position: [-4, 0, -4],
      type: BlockTypes.OakPlanks
    }
  ],
  removeBlock: (block: Block) => {
    set((state) => ({
      blocks: state.blocks.filter((b) => b !== block)
    }))
  }
}))
