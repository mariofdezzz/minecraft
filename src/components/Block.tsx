import { useBox } from '@react-three/cannon'
import { Edges } from '@react-three/drei'
import { AdditiveBlending, Mesh } from 'three'
import { useBlockDestroy } from '../composables/useBlockDestroy'
import { useMeshHovered } from '../composables/useMeshHovered'
import { Block as BlockType } from '../models/Block'

export interface BlockProps {
  block: BlockType
}

export function Block ({ block }: BlockProps): JSX.Element {
  const { position, type } = block
  const [x, y, z] = position

  const [ref] = useBox<Mesh>(() => ({
    type: 'Static',
    position: [x + 0.5, y + 0.5, z + 0.5]
  }))
  const { isHovered, onPointerMove, onPointerOut } = useMeshHovered()
  const { texture: breakingTexture, onPointerDown, onPointerUp } = useBlockDestroy(() => {
  })

  const textures = type.textures

  const materials = textures.map((texture, index) => (
    <meshStandardMaterial
      key={index}
      map={texture}
      color={type.colors?.[index]}
      attach={`material-${index}`}
    />
  ))

  return (
    <mesh
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      ref={ref}
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      {materials}
      <Edges visible={isHovered} color='white' />
      {
        breakingTexture !== null
          ? <meshStandardMaterial
              map={breakingTexture}
              blending={AdditiveBlending}
              attach='material'
            />
          : null
      }
    </mesh>
  )
}
