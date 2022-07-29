import Sprite from './Sprite.js'

export default class BaseObject {
    /**
     * @typedef Coordinate
     * @property {number} x
     * @property {number} y
     * 
     * @param {Sprite} sprite 
     * @param {Coordinate} coord 
     */
    constructor(sprite, coord) {
        this.sprite = sprite
        this.coord = coord
    }

    update() {
        this.sprite.nextFrame()
    }

    draw() {

    }
}