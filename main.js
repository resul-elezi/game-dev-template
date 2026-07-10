'use strict';

const canvas = document. getElementById('game-screen');
const ctx = canvas.getContext('2d');

console.log('Context: ', ctx);

class Game {
    constructor() {
        this.player = undefined;
    }

    initialize = () => {
        this.player = {
            x: 0,
            y: 0,
            height: 50,
            width: 60
        }
    }

    update = () => {}

    render = () => {}

}