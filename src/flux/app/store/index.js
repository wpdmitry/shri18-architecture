import dispatcher from '../dispatcher';
import eventsLib from '../utils/events-lib';
import sendToServer from '../api/sendToServer';

class Store {
    constructor() {
        this.data = [];

        this.events = {
            'addItem': this.addItem.bind(this),
            'removeItem': this.removeItem.bind(this),
        }
    }

    async evoke({type, data}) {
        this.events[type](data);
    }

    async addItem(data) {
        if (!data) {
            return;
        }

        try {
            await sendToServer(data);
            console.log('Код 200 Успешно');

            this.data.push(data);
            eventsLib.emit('change');
        } catch (e) {
            console.log('Код 500 Ошибка');
        }
    }

    removeItem(id) {
        console.log('Удаление элемента: ', id);
        this.data.splice(id, 1);

        eventsLib.emit('change');
    }

    getList() {
        return this.data.map((name, id) => {
            return {
                id,
                name,
            }
        });
    }
}

const store = new Store();

dispatcher.register(store);

export default store;