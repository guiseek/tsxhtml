import {extend} from 'src/decorators'
import {template} from './template'

@extend('figure')
export class Figure extends HTMLElement {
  constructor(props: Pick<HTMLImageElement, 'src' | 'alt'>) {
    super()
    this.append(template(props))
  }
}
