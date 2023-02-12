import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function App (): JSX.Element {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
    </Canvas>
  )
}
