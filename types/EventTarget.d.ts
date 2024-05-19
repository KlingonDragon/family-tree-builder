interface EventTarget {
    /**
     * Alias of addEventListener.
     * 
     * @param {string} type - The type of event.
     * @param {EventListenerOrEventListenerObject} callback - The event handler function.
     * 
     * @returns {this} The event target for method chaining.
     */
    on(type: string, callback: EventListenerOrEventListenerObject): this;

    /**
     * Alias of dispatchEvent with new Event.
     * 
     * @param {string} type - The type of event.
     * 
     * @returns {this} The event target for method chaining.
     */
    do(type: string): this;
}