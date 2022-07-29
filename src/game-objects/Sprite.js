export default class Sprite {
    /**
     * @typedef Dimension
     * @property {number} width
     * @property {number} height
     * 
     * @param {string[]} paths 
     * @param {Dimension} dimension 
     */
    constructor(paths, dimension) {
        /** @type {HTMLImageElement[]} */
        this.frames = []
        this.index = 0

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