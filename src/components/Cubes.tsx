import { CubeStore, useCubeStore } from '../store/cubes'
import { Cube } from './Cube'

export function Cubes (): JSX.Element {
  const [cubes] = useCubeStore((state) => [(state as CubeStore).cubes])

  return (
    <>
      {
        cubes.map((block) => (
          <Cube key={`${block.position.join('-')}`} block={block} />
        ))
      }
    </>
  )
}
