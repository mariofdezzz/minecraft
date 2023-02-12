import { useBox } from '@react-three/cannon'
import { Mesh } from 'three'
import { Block as BlockType } from '../models/Block'
import { Textures } from '../utils/textures'

export interface BlockProps {
  block: BlockType
}

export function Block ({ block: { position } }: BlockProps): JSX.Element {
  const [x, y, z] = position

  const [ref] = useBox<Mesh>(() => ({
    type: 'Static',
    position: [x + 0.5, y + 0.5, z + 0.5]
  }))

  const textures = Textures.grass

  const materials = textures.map((texture, index) => (
    <meshStandardMaterial
      key={index}
      map={texture}
      color={index === 2 ? '#B0E876' : '#FFFFFF'}
      attach={`material-${index}`}
    />
  ))

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      {materials}
    </mesh>
  )
}
