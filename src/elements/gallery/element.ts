import {autonomous} from 'src/decorators'
import {template} from './template'

@autonomous('gallery')
export class Gallery extends HTMLElement {
  clear() {
    while (this.firstChild) this.firstChild.remove()
  }

  render(list: Pick<HTMLImageElement, 'src' | 'alt'>[]) {
    this.append(template(list))
  }
}
