import BaseObject from './game-objects/BaseObject.js'

export default class Game {

    /** @param {HTMLCanvasElement} canvas */
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')

        this.width = canvas.width
        this.height = canvas.height

        /** @type {BaseObject[]} */
        this.objectsList = []
    }

    /** @param {BaseObject} object */
    addObject(object) {
        this.objectsList.push(object)
    }

    update() {
        this.objectsList.forEach(object => object.update())
    }
    
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.objectsList.forEach(object => object.draw())
    }

    run() {
        requestAnimationFrame(() => {
            this.update()
            this.render()
            this.run()
        })
    }
}