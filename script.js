const baseURL = 'sheet.svg';

class MyIconElement extends HTMLElement {
  // This tells the browser we want to be told
  // if the `name` attribute changes.
  static get observedAttributes() {
    return ['name'];
  }

  constructor() {
    super();

    // Here we create the DOM elements from the template
    // and put them in the ~~spooky~~ shadow DOM.
    this.attachShadow({ mode: 'open' });
    const template = document.getElementById('my-icon');
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);

    // Lets also grab a reference to that use element
    this.useEl = this.shadowRoot.getElementById('use');
  }

  // This is called whenever an attribute in the
  // observed attributes changes. It means you can
  // change `name` and it will update.
  attributeChangedCallback(name, oldValue, newValue) {
    this.useEl.setAttribute('xlink:href', `${baseURL}#icon-${newValue}`);
  }
}

// Finally lets define this custom element
customElements.define('my-icon', MyIconElement);
