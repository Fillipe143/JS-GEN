import Game from '../Game.js'
import renderImage from '../utils/SpriteRender.js'
import Sprite from './Sprite.js'

export default class BaseObject {
    /**
     * @param {Game} game
     * @param {Coordinate} coord 
     */
    constructor(game, coord) {
        this.game = game
        this.coord = coord

        /** @type {Sprite} */
        this.sprite = null

        this.onCreate()
    }

    onCreate(){}
    onUpdate(){}
    onRender(){}

    update() {
        this.sprite.nextFrame()
        this.onUpdate()
    }

    draw() {
        if (this.sprite != null) renderImage(this.game.ctx, this.coord, this.sprite)
        this.onRender()
    }
}