import { useBlockStore } from '../store/blocks'
import { Block } from './Block'

export function Blocks (): JSX.Element {
  const [blocks] = useBlockStore((state) => [state.blocks])

  return (
    <>
      {
        blocks.map((block) => (
          <Block key={`${block.position.join('-')}`} block={block} />
        ))
      }
    </>
  )
}
