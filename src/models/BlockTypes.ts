import { BlockType } from './BlockType'
import { dirt, getBlockTextures, oakPlanks, oakSideLog, oakTopLog, sideGrass, topGrass } from './Textures'

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

const OakLog: BlockType = {
  textures: getBlockTextures(oakTopLog, oakSideLog, oakTopLog)
}

const OakPlanks: BlockType = {
  textures: getBlockTextures(oakPlanks, oakPlanks, oakPlanks)
}

export const BlockTypes = {
  Grass,
  Dirt,
  OakLog,
  OakPlanks
} as const
