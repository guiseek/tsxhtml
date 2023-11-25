export const builtIn = (
  name: `${string}-${string}`,
  inherite: keyof HTMLElementTagNameMap
) => {
  return <T extends CustomElementConstructor>(target: T) => {
    customElements.define(name, target, {extends: inherite})
  }
}
