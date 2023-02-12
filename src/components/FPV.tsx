import { PointerLockControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function FPV (): JSX.Element {
  const { camera, gl } = useThree()

  return (
    <PointerLockControls
      args={[camera, gl.domElement]}
      addEventListener={undefined}
      hasEventListener={undefined}
      removeEventListener={undefined}
      dispatchEvent={undefined}
    />
  )
}
