'use strict';

const canvas = document. getElementById('game-screen');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, width, height);
        ctx.stroke();

        requestAnimationFrame(this.render);
    }

    handleUserInput = (e) => {

        /* 
        
        {
            key: string
            type: string

        }

        */

        const { key, type } = e;

        if (this.player) {

            if (type === 'keydown') {

                switch (key) {
                    case 'w':
                        this.player.y -= 1;
                        break;
                    case 'a':
                        this.player.x -= 1;
                        break;
                    case 's':
                        this.player.y += 1;
                        break;
                    case 'd':
                        this.player.x += 1;
                        break;
                    default:
                        break;
                }
            }
        }

    }

}

const game = new Game();
game.initialize();
game.update();
game.render();