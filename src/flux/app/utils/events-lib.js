const eventsLib = {
    events: {},

    on(eventName, callback) {
        if (!this.events.hasOwnProperty(eventName)) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return () => {
            this.events[eventName] = this.events[eventName]
                .filter(c => c !== callback);
        }
    },

    emit(eventName, data) {
        if (!this.events[eventName]) {
            return;
        }

        this.events[eventName]
            .forEach(callback => callback(data));
    }
};

export default eventsLib;