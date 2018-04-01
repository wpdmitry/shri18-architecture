import Base from '../base'
import eventsLib from '../../utils/events-lib';
import store from '../../store';
import template from './index.hbs';
import dispatcher from '../../dispatcher';

class Shopping extends Base {
    constructor() {
        super();

        eventsLib.on('change', () => this.handleChange());
    }

    render() {
        const shoppingList = store.getList();

        return template({shoppingList});
    }

    onRender() {
        this.shoppingBtnAddElement
            .addEventListener('click', (e) => this.handleAddItem(e));

        this.shoppingListElement
            .addEventListener('click', (e) => this.handleRemoveItem(e))
    }

    handleAddItem(e) {
        e.preventDefault();

        const data = this.shoppingInputElement.value;

        dispatcher.evoke({
            type: 'addItem',
            data,
        })
    }

    handleRemoveItem(e) {
        const shoppingItem = e.target;

        const { id } = shoppingItem.dataset;

        dispatcher.evoke({
            type: 'removeItem',
            data: id,
        })
    }

    handleChange() {
        this.update();
    }

    get shoppingInputElement() {
        return this.domElement.querySelector('.shopping__input');
    }

    get shoppingBtnAddElement() {
        return this.domElement.querySelector('.shopping__btn-add');
    }

    get shoppingListElement() {
        return this.domElement.querySelector('.shopping__list');
    }
}

export default Shopping;