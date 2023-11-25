import {extend} from 'src/decorators'

@extend('datalist')
export class DataList extends HTMLDataListElement {
  constructor(props?: Partial<HTMLDataListElement>) {
    super()
    Object.assign(this, props)
  }

  add(...option: HTMLOptionElement[]) {
    this.append(...option)
    return this
  }
}
