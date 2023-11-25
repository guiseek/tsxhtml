import {extend} from 'src/decorators'

@extend('input')
export class Input extends HTMLInputElement {
  constructor(props?: Partial<HTMLInputElement>) {
    super()
    Object.assign(this, props)
  }
}

declare global {
  interface IntrinsicElements {
    Input: Input
  }
}
