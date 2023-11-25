import {extend} from 'src/decorators'

interface Props extends Partial<HTMLFormElement> {
  onInvalid(this: GlobalEventHandlers, ev: Event): void
}

@extend('form')
export class Form extends HTMLFormElement {
  constructor(props: Props) {
    super()
    this.oninvalid = props.onInvalid
    this.onsubmit = (e) => {
      e.preventDefault()
    }
  }

  connectecCallback() {
    this.oninvalid
  }
}
