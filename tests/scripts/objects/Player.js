import BaseObject from '../../../src/game-objects/BaseObject.js'
import Sprite from '../../../src/game-objects/Sprite.js'

export default class Player extends BaseObject {
    onCreate() {
        this.sprite = new Sprite(
            ['/tests/assets/sprites/tank-0.png'],
            { width: 66, height: 127 }
        )
    }
}