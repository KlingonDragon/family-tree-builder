interface HTMLElement {
    $<TagName extends keyof HTMLElementTagNameMap>(selectors: TagName): HTMLElementTagNameMap[TagName] | null;
    $$<TagName extends keyof HTMLElementTagNameMap>(selectors: TagName): NodeListOf<HTMLElementTagNameMap[TagName]>;
    _(...nodes: (string | Node)[]): this;
    __(...nodes: (string | Node)[]): this;
}