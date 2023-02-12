/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { CubeStore, useCubeStore } from '../store/cubes'
import { Cube } from './Cube'

export function Cubes (): JSX.Element[] {
  const [cubes] = useCubeStore((state) => [(state as CubeStore).cubes])

  return cubes.map(({ position }) => (
    <Cube key={`${position.join('-')}`} position={position} />
  ))
}
