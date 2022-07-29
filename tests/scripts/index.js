import Game from '../../src/Game.js'
import Player from './objects/Player.js'

const canvas = document.querySelector('canvas')
const game = new Game(canvas)

canvas.width = window.innerWidth
canvas.height = window.innerHeight

game.addObject(new Player(game, { x: 0, y: 0 }))

game.run()