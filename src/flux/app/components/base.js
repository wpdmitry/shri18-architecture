class Base {
    renderTo(el) {
        el.innerHTML = this.render();
        this.domElement = el.children[0];

        this.onRender();
    }

    update() {
        const parent = this.domElement.parentElement;

        this.renderTo(parent);
    }
}

export default Base;