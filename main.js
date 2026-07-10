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
            width: 60,
            height: 50
        }

        document.addEventListener('keyup', this.handleUserInput);
        document.addEventListener('keydown', this.handleUserInput);
    }

    update = () => {

        requestAnimationFrame(this.update);
    }

    render = () => {
        const { x, y, width, height } = this.player;
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, width, height);
        ctx.stroke();

        requestAnimationFrame(this.render);
    }

    handleUserInput = (e) => {

        /* 
        
        {
            key: ...,
            type: string
            
        }

        */

    }

}

const game = new Game();
game.initialize();
game.update();
game.render();