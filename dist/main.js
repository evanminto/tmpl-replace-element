var $gXNCa$lit = require("lit");


const $e64fc7548ab114df$var$tokenListConverter = {
    fromAttribute: (value)=>value.split(/\s+/)
    ,
    toAttribute: (value)=>value.join(' ')
};
class $e64fc7548ab114df$export$2e2bcd8739ae039 extends $gXNCa$lit.LitElement {
    /** @prop {String} template */ static tagName = 'auto-tmpl';
    static properties = {
        template: String,
        mode: String,
        elements: {
            converter: $e64fc7548ab114df$var$tokenListConverter
        }
    };
    static modes = {
        AUTO: 'auto',
        MANUAL: 'manual',
        WHEN_DEFINED: 'when-defined'
    };
    constructor(){
        super();
        /** @type {'auto'|'manual'|'when-defined'} */ this.mode = $e64fc7548ab114df$export$2e2bcd8739ae039.modes.AUTO;
        /** @type {String} */ this.template = null;
        /** @type {String[]} */ this.elements = [];
    }
    get #templateEl() {
        if (this.template) return document.getElementById(this.template);
        const templateChild = this.querySelector(':scope > template');
        return templateChild;
    }
    connectedCallback() {
        super.connectedCallback();
        const { mode: mode  } = this;
        if (![
            'manual',
            'when-defined'
        ].includes(mode)) this.replace();
    }
    updated(changed) {
        if ((changed.has('mode') || changed.has('elements')) && this.mode === 'when-defined' && this.elements.length > 0) Promise.all(this.elements.map((name)=>customElements.whenDefined(name)
        )).then(()=>this.replace()
        );
    }
    replace() {
        const templateEl = this.#templateEl;
        if (!templateEl) return;
        this.replaceWith(templateEl.content.cloneNode(true));
    }
    static styles = $gXNCa$lit.css`
    :host {
      display: none !important;
    }
  `;
}
customElements.define($e64fc7548ab114df$export$2e2bcd8739ae039.tagName, $e64fc7548ab114df$export$2e2bcd8739ae039);


customElements.define($e64fc7548ab114df$export$2e2bcd8739ae039.tagName, $e64fc7548ab114df$export$2e2bcd8739ae039);


//# sourceMappingURL=main.js.map
