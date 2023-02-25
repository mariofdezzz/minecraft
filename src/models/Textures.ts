import { NearestFilter, RepeatWrapping, Texture, TextureLoader } from 'three'
import { BlockTextures } from './BlockType'

import TopGrass from '../assets/textures/grass/top.png'
import SideGrass from '../assets/textures/grass/side.png'
import Dirt from '../assets/textures/dirt.png'
import OakTopLog from '../assets/textures/oak/log/top.png'
import OakSideLog from '../assets/textures/oak/log/side.png'
import OakPlanks from '../assets/textures/oak/planks.png'

import Destroy0 from '../assets/textures/destroy/destroy_stage_0.png'
import Destroy1 from '../assets/textures/destroy/destroy_stage_1.png'
import Destroy2 from '../assets/textures/destroy/destroy_stage_2.png'
import Destroy3 from '../assets/textures/destroy/destroy_stage_3.png'
import Destroy4 from '../assets/textures/destroy/destroy_stage_4.png'
import Destroy5 from '../assets/textures/destroy/destroy_stage_5.png'
import Destroy6 from '../assets/textures/destroy/destroy_stage_6.png'
import Destroy7 from '../assets/textures/destroy/destroy_stage_7.png'
import Destroy8 from '../assets/textures/destroy/destroy_stage_8.png'
import Destroy9 from '../assets/textures/destroy/destroy_stage_9.png'

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
export const destroyStates = [
  getTexture(Destroy0),
  getTexture(Destroy1),
  getTexture(Destroy2),
  getTexture(Destroy3),
  getTexture(Destroy4),
  getTexture(Destroy5),
  getTexture(Destroy6),
  getTexture(Destroy7),
  getTexture(Destroy8),
  getTexture(Destroy9)
]
