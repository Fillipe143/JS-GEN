import BaseObject from '../../../src/game-objects/BaseObject.js'
import Sprite from '../../../src/game-objects/Sprite.js'
import { keyboard_check } from '../../../src/scripts/keyboard.js'


export default class Player extends BaseObject {
    onCreate() {
        this.sprite = new Sprite(
            ['/tests/assets/sprites/tank-0.png'],
            { width: 66, height: 127 }
        )

        this.speed = 3
    }

    onUpdate() {
        const hdir = keyboard_check('d') - keyboard_check('a')
        const vdir = keyboard_check('s') - keyboard_check('w')

        this.coord.x += hdir * this.speed
        this.coord.y += vdir * this.speed
    }
}