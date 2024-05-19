/** 
 * @module prototypes.js
 * Module that adds functions to built in elements
 * intended for use as "Side effect import" 
 */
/// <reference path="../../types/HTMLElement.d.ts" />
/// <reference path="../../types/EventTarget.d.ts" />


/**
 * Alias for querySelector
 * 
 * @template {keyof HTMLElementTagNameMap} TagName
 * @param {TagName} selectors - The CSS selector.
 * 
 * @returns {HTMLElementTagNameMap[TagName] | null} - The first element that matches the selector.
 */
HTMLElement.prototype.$ = function (selectors) {
    return this.querySelector(selectors);
};

/**
 * Alias for querySelectorAll
 * 
 * @template {keyof HTMLElementTagNameMap} TagName
 * @param {TagName} selectors  - The CSS selectors.
 * 
 * @returns {NodeListOf<HTMLElementTagNameMap[TagName]>} - A static NodeList representing a list of elements that match the selectors.
 */
HTMLElement.prototype.$$ = function (selectors) {
    return this.querySelectorAll(selectors);
};

/**
 * Nodes, Strings, and arrays of Nodes, Strings, and arrays of ...
 * 
 * @typedef {string | Node | NestedStringOrNodeArray[]} NestedStringOrNodeArray
 */

/**
 * Function to append items.
 * 
 * @param {...NestedStringOrNodeArray} nodes - The items to append.
 * 
 * @returns {this} The element on which it was called (can be used to chain appends).
 */
HTMLElement.prototype._ = function (...nodes) {
    this.append(...nodes.flat());
    return this;
};

/**
 * Alias for replaceChildren.
 * 
 * @param {...NestedStringOrNodeArray} nodes - The new children to replace the old.
 * 
 * @returns {this} The element on which it was called.
 */
HTMLElement.prototype.__ = function (...nodes) {
    this.replaceChildren(...nodes.filter(node => node !== undefined && node !== null));
    return this;
};

/**
 * Alias of addEventListener.
 * 
 * @param {string} type - The type of event.
 * @param {EventListenerOrEventListenerObject} callback - The event handler function.
 * 
 * @returns {this} The event target for method chaining.
 */
EventTarget.prototype.on = function (type, callback) {
    this.addEventListener(type, callback);
    return this;
};

/**
 * Alias of dispatchEvent with new Event.
 * 
 * @param {string} type - The type of event.
 * 
 * @returns {this} The event target for method chaining.
 */
EventTarget.prototype.do = function (type) {
    this.dispatchEvent(new Event(type));
    return this;
};
