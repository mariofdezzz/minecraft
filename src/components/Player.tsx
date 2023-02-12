import { useSphere } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Mesh, Vector3 } from 'three'
import { userKeyboard } from '../hooks/useKeyboard'

export function Player (): JSX.Element {
  const SPEED = 6
  const RUN_SPEED = 10
  const JUMP_FORCE = 5

  const actions = userKeyboard()
  const {
    moveForward,
    moveBackward,
    moveLeft,
    moveRight,
    sprint,
    jump
  } = actions

  const { camera } = useThree()
  const [ref, api] = useSphere<Mesh>(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [1, 3, 1]
  }))

  const position = useRef([0, 0, 0])
  useEffect(() => {
    api.position.subscribe((p) => (position.current = p))
  }, [api.position])

  const velocity = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v))
  }, [api.velocity])

  useFrame(() => {
    camera.position.copy(
      new Vector3(
        position.current[0],
        position.current[1] + 1,
        position.current[2]
      )
    )
    const direction = new Vector3()
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    )
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    )

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(sprint ? RUN_SPEED : SPEED)
      .applyEuler(camera.rotation)

    api.velocity.set(
      direction.x,
      velocity.current[1],
      direction.z
    )

    if (
      jump &&
      Math.abs(velocity.current[1]) < 0.05
    ) {
      api.velocity.set(
        velocity.current[0],
        JUMP_FORCE,
        velocity.current[2]
      )
    }
  })

  return (
    <mesh ref={ref} />
  )
}
