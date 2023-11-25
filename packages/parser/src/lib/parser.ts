import type {ElmByTag, ElmFn, Ctor, Tags} from './types'

export const tsx = {
  parse<K extends Tags>(
    tagOrFn: K | ElmFn<K> | Ctor<ElmByTag<K>>,
    attrs: Partial<ElmByTag<K>>,
    ...nodes: Node[]
  ) {
    let component: ElmByTag<K>

    if (typeof tagOrFn === 'string') {
      component = document.createElement(tagOrFn)
    } else {
      try {
        component = new (tagOrFn as Ctor<ElmByTag<K>>)(attrs)
      } catch {
        component = (tagOrFn as ElmFn<K>)(attrs)
      }
    }

    component.append(
      ...nodes.flatMap((node) =>
        typeof node === 'string' ? new Text(node) : node
      )
    )

    return Object.assign(component, attrs)
  },
  factory() {
    return new DocumentFragment()
  },
}
