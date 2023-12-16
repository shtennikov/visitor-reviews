export abstract class BaseComponent {
    protected node!: Element;

    public get element(): Element {
        return this.node;
    }

    public destroy(): void {
        this.node.remove();
    }

    protected get template(): string {
        return '';
    }

    protected render(): void {
        this.node = this.createElement();
    }

    private createElement(): Element {
        const wrapper = document.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', this.template);

        return wrapper.firstElementChild || wrapper;
    }
}
