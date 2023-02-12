import { usePlane } from '@react-three/cannon'
import { Mesh } from 'three'
import { Textures } from '../utils/textures'

export function Ground (): JSX.Element {
  const SIZE = 100
  const DIMENSIONS = [SIZE, SIZE] as const

  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0]
  }))

  const texture = Textures.grass[2].clone()
  texture.repeat.set(...DIMENSIONS)

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={texture} color='#B0E876' />
    </mesh>
  )
}
