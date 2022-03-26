var $gXNCa$lit = require("lit");


var $29ae4730e36991c0$export$2e2bcd8739ae039 = {
    fromAttribute: (value)=>value.split(/\s+/)
    ,
    toAttribute: (value)=>value.join(' ')
};


class $e64fc7548ab114df$export$2e2bcd8739ae039 extends $gXNCa$lit.LitElement {
    /** @prop {String} template */ static tagName = 'tmpl-replace';
    static properties = {
        template: String,
        mode: String,
        elements: {
            converter: $29ae4730e36991c0$export$2e2bcd8739ae039
        }
    };
    static modes = {
        AUTO: 'auto',
        MANUAL: 'manual',
        WHEN_DEFINED: 'when-defined'
    };
    static styles = $gXNCa$lit.css`
    :host {
      display: none !important;
    }
  `;
    constructor(){
        super();
        /** @type {'auto'|'manual'|'when-defined'} */ this.mode = $e64fc7548ab114df$export$2e2bcd8739ae039.modes.AUTO;
        /** @type {String} */ this.template = null;
        /** @type {String[]} */ this.elements = [];
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
    get #templateEl() {
        if (this.template) return document.getElementById(this.template);
        const templateChild = this.querySelector(':scope > template');
        return templateChild;
    }
}
customElements.define($e64fc7548ab114df$export$2e2bcd8739ae039.tagName, $e64fc7548ab114df$export$2e2bcd8739ae039);


customElements.define($e64fc7548ab114df$export$2e2bcd8739ae039.tagName, $e64fc7548ab114df$export$2e2bcd8739ae039);


//# sourceMappingURL=common.js.map
