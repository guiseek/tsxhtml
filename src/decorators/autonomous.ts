export const autonomous = (name: string) => {
  return <T extends CustomElementConstructor>(target: T) => {
    customElements.define(`tsx-${name}`, target)
  }
}
