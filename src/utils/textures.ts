import { NearestFilter, RepeatWrapping, Texture, TextureLoader } from 'three'

import TopGrass from '../assets/textures/grass/top.png'
import SideGrass from '../assets/textures/grass/side.png'
import Dirt from '../assets/textures/dirt.png'

export type CubeTextures = [
  Texture,
  Texture,
  Texture,
  Texture,
  Texture,
  Texture
]

function getTexture (path: string): Texture {
  const texture = new TextureLoader().load(path)

  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.magFilter = NearestFilter

  return texture
}

function getCubeTextures (
  top: Texture,
  side: Texture,
  bottom: Texture
): CubeTextures {
  return [
    side,
    side,
    top,
    bottom,
    side,
    side
  ]
}

const topGrass = getTexture(TopGrass)
const sideGrass = getTexture(SideGrass)
const dirt = getTexture(Dirt)

export const Textures = {
  grass: getCubeTextures(topGrass, sideGrass, dirt),
  dirt: getCubeTextures(dirt, dirt, dirt)
}
