import { makeAutoObservable } from 'mobx';

class ApplicationState {
    debug: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setDebug(debug: boolean) {
        this.debug = debug;
    }

    toggleDebug() {
        this.debug = !this.debug;
    }
}

export const applicationState = new ApplicationState();
