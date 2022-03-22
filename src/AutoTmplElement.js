import { LitElement, css } from 'lit';

const tokenListConverter = {
  fromAttribute: value => value.split(/\s+/),
  toAttribute: value => value.join(' '),
};

/**
 * @customElement auto-tmpl
 * @attr elements
 * @attr mode
 * @attr template
 */
export default class AutoTmplElement extends LitElement {
  /** @prop {String} template */

  static tagName = 'auto-tmpl';

  static properties = {
    template: String,
    mode: String,
    elements: { converter: tokenListConverter },
  };

  static modes = {
    AUTO: 'auto',
    MANUAL: 'manual',
    WHEN_DEFINED: 'when-defined',
  };

  constructor() {
    super();

    /** @type {'auto'|'manual'|'when-defined'} */
    this.mode = AutoTmplElement.modes.AUTO;

    /** @type {String} */
    this.template = null;

    /** @type {String[]} */
    this.elements = [];
  }

  get #templateEl() {
    if (this.template) {
      return document.getElementById(this.template);
    }

    const templateChild = this.querySelector(':scope > template');

    return templateChild;
  }

  connectedCallback() {
    super.connectedCallback();
    const { mode } = this;

    if (!['manual', 'when-defined'].includes(mode)) {
      this.replace();
    }
  }

  updated(changed) {
    if (
      (changed.has('mode') || changed.has('elements')) &&
      this.mode === 'when-defined' &&
      this.elements.length > 0
    ) {
      Promise.all(
        this.elements.map(name => customElements.whenDefined(name))
      ).then(() => this.replace());
    }
  }

  replace() {
    const templateEl = this.#templateEl;

    if (!templateEl) {
      return;
    }

    this.replaceWith(templateEl.content.cloneNode(true));
  }

  static styles = css`
    :host {
      display: none !important;
    }
  `;
}

customElements.define(AutoTmplElement.tagName, AutoTmplElement);
