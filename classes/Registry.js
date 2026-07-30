import Entity from './Entity'

class Registry {
    constructor() {
        this.numberOfEntities = 0;
        this.systems = {};
    }

    // array of objects
    createEntity = (components) => {
        const newEntity = new Entity(this.numberOfEntities++, this);
        let newEntityComponents = {};

        for (let i = 0; i < components.length; i++) {
            const component = components[i];

        }
    }
}