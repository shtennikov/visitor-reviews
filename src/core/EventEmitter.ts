// eslint-disable-next-line @typescript-eslint/ban-types
type Listener = Function;

export class EventEmitter {
    private events: { [eventName: string]: Listener[] } = {};

    public on(eventName: string, listener: Listener): void {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(listener);
    }

    public emit(eventName: string, ...args: unknown[]): void {
        const listeners = this.events[eventName];

        if (listeners) {
            listeners.forEach((listener) => {
                listener(...args);
            });
        }
    }

    public off(eventName: string, listener: Listener): void {
        const listeners = this.events[eventName];

        if (listeners) {
            this.events[eventName] = listeners.filter((l) => l !== listener);
        }
    }
}
