import type {ElmByTag, ElmFn, Ctor, Tags} from './types'
import {children} from './children'
import {element} from './element'
import {props} from './props'

export const tsx = {
  parse<K extends Tags>(
    tagOrFn: K | ElmFn<K> | Ctor<ElmByTag<K>>,
    attrs: Partial<ElmByTag<K>>,
    ...nodes: Node[]
  ) {
    attrs = props(attrs ?? {})

    let component: ElmByTag<K>

    if (typeof tagOrFn === 'string') {
      component = element(tagOrFn, attrs)
    } else {
      try {
        component = new (tagOrFn as Ctor<ElmByTag<K>>)(attrs)
      } catch {
        component = (tagOrFn as ElmFn<K>)(attrs)
      }
    }

    component.append(...children(...nodes))

    return component
  },
  factory() {
    return new DocumentFragment()
  },
}
