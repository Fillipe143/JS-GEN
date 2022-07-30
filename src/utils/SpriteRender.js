import Sprite from '../game-objects/Sprite.js'

/**
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Coordinate} coord 
 * @param {Sprite} sprite 
 */
export default function renderSprite(ctx, coord, sprite) {
    const dimension = {
        width: sprite.dimension.width * sprite.scale.x,
        height: sprite.dimension.height * sprite.scale.y
    }

    const size = Math.sqrt(
        Math.pow(dimension.width, 2) +
        Math.pow(dimension.height, 2)
    )

    const canvas = document.createElement('canvas')
    const nCtx = canvas.getContext('2d')
    canvas.width = canvas.height = size

    nCtx.translate(size / 2, size / 2)
    nCtx.rotate(sprite.angle * Math.PI / 180)

    nCtx.drawImage(
        sprite.getFrame(),
        -dimension.width / 2, -dimension.height / 2,
        dimension.width, dimension.height
    )


    ctx.drawImage(
        canvas,
        coord.x - size / 2 + dimension.width / 2,
        coord.y - size / 2 + dimension.height / 2
    )
}