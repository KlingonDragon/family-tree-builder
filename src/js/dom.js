/** 
 * @module dom.js
 * Module that adds functions for creating and selecting elements in the dom.
 */

/**
 * Props object for element creation
 * 
 * @typedef {Object} ElementProps
 * @property {Object<string,*>} [basic] - Basic key value props
 * @property {Object<string, string>} [dataset] - HTML data-* attributes
 * @property {Partial<CSSStyleDeclaration>} [style] - CSS Styles
 */


/**
 * Create and returns a new element.
 * 
 * @template {keyof HTMLElementTagNameMap} TagName
 * @param {TagName} tagName - Type of element, e.g., 'img'.
 * @param {ElementProps} [props] - Object of key-value pairs of properties to be applied.
 * 
 * @returns {HTMLElementTagNameMap[TagName]} - The newly created element.
 */
export const _ = (tagName, props) => {
    const node = document.createElement(tagName);

    // Apply properties
    if (props?.basic) {
        Object.entries(props.basic).forEach(([key, value]) => {
            // @ts-ignore
            node[key] = value;
        });
    }
    // Apply properties
    if (props?.dataset) {
        Object.entries(props.dataset).forEach(([key, value]) => {
            node.dataset[key] = value;
        });
    }
    // Apply properties
    if (props?.style) {
        Object.assign(node.style, props.style);
    }
    return node;
};

/**
 * Alias for document.querySelector
 * 
 * @template {keyof HTMLElementTagNameMap} TagName
 * @param {TagName} selectors  - The CSS selectors.
 * 
 * @returns {HTMLElementTagNameMap[TagName] | null} - The first element that matches the selectors.
 */
export const $ = selectors => document.querySelector(selectors);

/**
 * Alias for document.querySelectorAll
 * 
 * @template {keyof HTMLElementTagNameMap} TagName
 * @param {TagName} selectors - The CSS selectors.
 * 
 * @returns {NodeListOf<HTMLElementTagNameMap[TagName]>} - A static NodeList representing a list of elements that match the selectors.
 */
export const $$ = selectors => document.querySelectorAll(selectors);