export const autonomous = (name: `${string}-${string}`) => {
  return <T extends CustomElementConstructor>(target: T) => {
    customElements.define(name, target)
  }
}
