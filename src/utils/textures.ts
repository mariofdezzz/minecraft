import { NearestFilter, RepeatWrapping, Texture, TextureLoader } from 'three'

import TopGrass from '../assets/textures/grass/top.png'
import SideGrass from '../assets/textures/grass/side.png'
import Dirt from '../assets/textures/dirt.png'

function getTexture (path: string): Texture {
  const texture = new TextureLoader().load(path)

  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.magFilter = NearestFilter

  return texture
}

const topGrass = getTexture(TopGrass)
const sideGrass = getTexture(SideGrass)
const dirt = getTexture(Dirt)

export const Textures = {
  grass: {
    top: topGrass,
    side: sideGrass,
    bottom: dirt
  },
  dirt
}
