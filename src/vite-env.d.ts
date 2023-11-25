/// <reference types="vite/client" />

type Tags = keyof HTMLElementTagNameMap

type ElmByTag<K extends Tags> = HTMLElementTagNameMap[K]

interface tsx {
  parse<K extends Tags>(
    tagOrFn: K | ElmFn<K>,
    attrs: object,
    ...node: Node[]
  ): ElmByTag<K>
  factory(): DocumentFragment
}

declare const tsx: tsx

type ToEvents<S extends string> = S extends `on${infer T}` ? `on:${T}` : ''

type FromEvents<S extends string> = S extends `on:${infer T}` ? `on${T}` : ''

type EventHandlers = {
  [K in ToEvents<keyof GlobalEventHandlers>]: GlobalEventHandlers[FromEvents<K>]
}

declare namespace JSX {
  type IntrinsicElements = {
    [K in Tags]: Partial<ElmByTag<K> & EventHandlers>
  }
}
