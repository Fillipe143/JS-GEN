const keys = {}

document.addEventListener('keydown', ({ key }) => keys[key] = 1)
document.addEventListener('keyup', ({ key }) => keys[key] = 0)

export function keyboard_check(key) {
    return key in keys ? keys[key] : 0
}