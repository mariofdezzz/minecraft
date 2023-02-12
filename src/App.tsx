import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Cubes } from './components/Cubes'
import { FPV as Fpv } from './components/FPV'
import { Ground } from './components/Ground'
import { Player } from './components/Player'

export default function App (): JSX.Element {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
      <Fpv />
      <axesHelper args={[5]} />

      <Physics>
        <Cubes />
        <Player />
        {/* <Ground /> */}
      </Physics>
    </Canvas>
  )
}
