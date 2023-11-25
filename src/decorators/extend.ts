export const extend = <K extends keyof HTMLElementTagNameMap>(inherite: K) => {
  return <T extends CustomElementConstructor>(target: T) => {
    customElements.define(`txs-${inherite}`, target, {extends: inherite})
  }
}
