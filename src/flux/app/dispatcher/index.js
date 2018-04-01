class Dispatcher {
    constructor() {
        this.listOfRegistered = [];
    }

    evoke(event) {
        this.listOfRegistered
            .forEach(reg => reg.evoke(event));
    }

    register(newReg) {
        this.listOfRegistered.push(newReg);
    }

    unregister(reg) {
        this.listOfRegistered = this.listOfRegistered
            .filter(alreadyReg => alreadyReg !== reg);
    }
}

export default new Dispatcher();