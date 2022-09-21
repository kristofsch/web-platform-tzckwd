const baseURL = 'sheet.svg';

class MyIconElement extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    const template = document.getElementById('my-icon');
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);

    this.useEl = this.shadowRoot.getElementById('use');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.useEl.setAttribute('xlink:href', `${baseURL}#icon-${newValue}`);
  }
}

customElements.define('my-icon', MyIconElement);
