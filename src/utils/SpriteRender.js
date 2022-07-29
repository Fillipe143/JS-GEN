import Sprite from '../game-objects/Sprite.js'

/**
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Coordinate} coord 
 * @param {Sprite} sprite 
 */
export default function renderSprite(ctx, coord, sprite) {
    const dimension = sprite.dimension

    const size = Math.sqrt(
        Math.pow(dimension.width * sprite.scale.x, 2) +
        Math.pow(dimension.height * sprite.scale.y, 2)
    )

    ctx.drawImage(sprite.getFrame(), coord.x, coord.y, dimension.width, dimension.height)
}