import { NearestFilter, RepeatWrapping, Texture, TextureLoader } from 'three'
import { BlockTextures } from './BlockType'

import TopGrass from '../assets/textures/grass/top.png'
import SideGrass from '../assets/textures/grass/side.png'
import Dirt from '../assets/textures/dirt.png'

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
