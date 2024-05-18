interface EventTarget {
    on(type: string, callback: EventListenerOrEventListenerObject): this;
    do(type: string): this;
}