import { BlockType } from './BlockType'
import { dirt, getBlockTextures, sideGrass, topGrass } from './Textures'

const Grass: BlockType = {
  textures: getBlockTextures(topGrass, sideGrass, dirt),
  colors: [
    '#ffffff',
    '#ffffff',
    '#b0e876',
    '#ffffff',
    '#ffffff',
    '#ffffff'
  ]
}

const Dirt: BlockType = {
  textures: getBlockTextures(dirt, dirt, dirt)
}

export const BlockTypes = {
  Grass,
  Dirt
} as const
