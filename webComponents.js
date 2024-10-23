class DropDownElement extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = `
      <style>
        .menu > div {
          overflow: hidden;
        }

        .menu {
          display: grid; 
          grid-template-rows: 0fr;
          transition: grid-template-rows ${this.getAttribute('transition')}ms;
        }

        .menu.active {
          grid-template-rows: 1fr;
        }
      </style>

      <div>
        <slot name="title"></slot>
      </div>
      <div class="menu">
        <div>
          <slot name="menu"></slot>
        </div>
      </div>
    `
    this.shadowRoot
      .querySelector('slot[name="title"]')
      .addEventListener('click', () => {
        this.shadowRoot.querySelector('.menu').classList.toggle('active')
      })
  }
}

customElements.define('drop-down', DropDownElement)
