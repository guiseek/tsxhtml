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

declare namespace JSX {
  type IntrinsicElements = {
    [K in Tags]: Partial<ElmByTag<K>>
  }
}

declare const main: HTMLDivElement