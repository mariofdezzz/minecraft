import { NearestFilter, RepeatWrapping, Texture, TextureLoader } from 'three'
import { BlockTextures } from './BlockType'

import TopGrass from '../assets/textures/grass/top.png'
import SideGrass from '../assets/textures/grass/side.png'
import Dirt from '../assets/textures/dirt.png'
import OakTopLog from '../assets/textures/oak/log/top.png'
import OakSideLog from '../assets/textures/oak/log/side.png'
import OakPlanks from '../assets/textures/oak/planks.png'

function getTexture (path: string): Texture {
  const texture = new TextureLoader().load(path)

  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.magFilter = NearestFilter

  return texture
}

export function getBlockTextures (
  top: Texture,
  side: Texture,
  bottom: Texture
): BlockTextures {
  return [
    side,
    side,
    top,
    bottom,
    side,
    side
  ]
}

export const topGrass = getTexture(TopGrass)
export const sideGrass = getTexture(SideGrass)
export const dirt = getTexture(Dirt)
export const oakTopLog = getTexture(OakTopLog)
export const oakSideLog = getTexture(OakSideLog)
export const oakPlanks = getTexture(OakPlanks)
