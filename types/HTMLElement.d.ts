interface HTMLElementTagNameMap {
    "edit-person-aside": EditPersonAside;
}

/**
 * Nodes, Strings, and arrays of Nodes, Strings, and arrays of ...
 */
type NestedStringOrNodeArray = string | Node | NestedStringOrNodeArray[];

interface HTMLElement {
    /**
     * Alias for querySelector
     * 
     * @template {keyof HTMLElementTagNameMap} TagName
     * @param {TagName} selectors - The CSS selector.
     * 
     * @returns {HTMLElementTagNameMap[TagName] | null} - The first element that matches the selector.
     */
    $<TagName extends keyof HTMLElementTagNameMap>(selectors: TagName): HTMLElementTagNameMap[TagName] | null;

    /**
     * Alias for querySelectorAll
     * 
     * @template {keyof HTMLElementTagNameMap} TagName
     * @param {TagName} selectors  - The CSS selectors.
     * 
     * @returns {NodeListOf<HTMLElementTagNameMap[TagName]>} - A static NodeList representing a list of elements that match the selectors.
     */
    $$<TagName extends keyof HTMLElementTagNameMap>(selectors: TagName): NodeListOf<HTMLElementTagNameMap[TagName]>;

    /**
     * Function to append items.
     * 
     * @param {...NestedStringOrNodeArray} nodes - The items to append.
     * 
     * @returns {this} The element on which it was called (can be used to chain appends).
     */
    _(...nodes: NestedStringOrNodeArray): this;

    /**
     * Alias for replaceChildren.
     * 
     * @param {...NestedStringOrNodeArray} nodes - The new children to replace the old.
     * 
     * @returns {this} The element on which it was called.
     */
    __(...nodes: NestedStringOrNodeArray): this;
}