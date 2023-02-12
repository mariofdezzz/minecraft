import { Texture } from 'three'

export type BlockTextures = [
  Texture,
  Texture,
  Texture,
  Texture,
  Texture,
  Texture,
]

export type BlockColors = [
  string,
  string,
  string,
  string,
  string,
  string,
]

export interface BlockType {
  readonly textures: BlockTextures
  readonly colors?: BlockColors
}
