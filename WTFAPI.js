const {DataSource} = require('apollo-datasource');

class WTFAPI extends DataSource {
    constructor(props) {
        const {store} = props;
        super();
        this.store = store;
        this.inited = false;

    }

    async handleCreate() {
        if (!this.inited) {
            this.inited = true;

        }
    }


    async initialize(config) {
        if (!this.inited)
            await this.handleCreate();

        const context = config.context;

        this.context = context;

    }

    async getLevels() {
        const levels = this.store.Level.findAll();
        return levels;
    }
}

module.exports = WTFAPI;

