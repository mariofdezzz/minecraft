import { Physics } from '@react-three/cannon'
import { Sky, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Blocks } from './components/Blocks'
import { FPV as Fpv } from './components/FPV'
import { Ground } from './components/Ground'
import { Player } from './components/Player'
import { UI as Ui } from './components/UI'

export default function App (): JSX.Element {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <axesHelper args={[5]} />

        <Physics>
          <Blocks />
          <Player />
          {/* <Ground /> */}
        </Physics>
      </Canvas>
      <Ui />
      {/* <Stats className='stats' /> */}
    </>

  )
}
