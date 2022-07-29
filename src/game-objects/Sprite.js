export default class Sprite {
    /**
     * @param {string[]} paths 
     * @param {Dimension} dimension 
     */
    constructor(paths, dimension) {
        this.dimension = dimension
        
        /** @type {HTMLImageElement[]} */
        this.frames = []
        this.index = 0

        /** @type {Scale} */
        this.scale = { x: 1, y: 1 }
        this.angle = 0

        paths.forEach(path => {
            const image = new Image(dimension.width, dimension.height)
            image.src = path

            this.frames.push(image)
        })
    }

    nextFrame() {
        this.index = this.index + 1 >= this.frames.length ? 0 : this.frames + 1
    }

    getFrame() {
        return this.frames[this.index]
    }
}