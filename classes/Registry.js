import { MovementComponent, PositionComponent } from "./Component.js";
import Entity from "./Entity.js";
import { MovementSystem, RenderSystem } from "./System.js";

class Registry {
    constructor() {
        this.numberOfEntities = 0;
        this.entitiesToBeAdded = [];
        this.systems = {}
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

export default Registry;