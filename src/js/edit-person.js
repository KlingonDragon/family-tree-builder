import { _ } from "./dom.js";

class EditPersonAside extends HTMLElement {
    constructor() {
        super();
        this.__(_('nav')._(_('button').on('click', () => this.close())._('Close')));
    }

    /**
     * Open the edit person aside
     */
    open() { this.dataset.open = ''; }
    /**
     * Close the edit person aside
     */
    close() { delete this.dataset.open; }

}
customElements.define('edit-person-aside', EditPersonAside);