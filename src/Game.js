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

    update() {
        this.objectsList.forEach(object => object.update())
    }
    
    render() {
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