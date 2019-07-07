import { LitElement, html, css } from 'lit-element'

class StatBlockSection extends LitElement {

  static get styles() {
    return css`
    :host {
      display: block;
    }

    h2 {
      font-family: var(--stat-block-heading-font-family, serif);
      border-bottom: 1px solid;
      font-variant: small-caps;
      color: var(--stat-block-header-color, black);
      break-inside: avoid-column;
      break-after: avoid-column;
      font-size: 1.5em;
      margin-top: 0.6em;
      margin-bottom: 0.4em;
    }`
  }

  static get is() { return 'vellum-stat-block-section' }

  static get properties() {
    return {
      name: String
    }
  }

  render() {
    return html`
    <section>
      <h2>${this.name}</h2>

      <slot></slot>
    </section>`
  }
}

customElements.define(StatBlockSection.is, StatBlockSection)
