import {Figure} from '../figure/element'

export const template = (list: Pick<HTMLImageElement, 'src' | 'alt'>[]) => {
  return (
    <div className="grid">
      {list.map((image) => (
        <Figure {...image} />
      ))}
    </div>
  )
}
