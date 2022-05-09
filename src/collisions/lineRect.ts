import { lineLine } from './lineLine'

/**
 * Check if a line and a rectangle intersect
 *
 * Source: https://www.jeffreythompson.org/collision-detection/line-rect.php
 *
 * @param {number} x1 Line starting point x poisition
 * @param {number} y1 Line starting point y poisition
 * @param {number} x2 Line ending point x poisition
 * @param {number} y2 Line ending point y poisition
 * @param {number} rx Rectangle x position
 * @param {number} ry Rectangle y position
 * @param {number} rw Rectangle width
 * @param {number} rh Rectangle height
 * @returns {boolean}
 *
 * @example
 * ```js
 * import { lineRect } from 'jt-collision-detection'
 *
 * const line = {
 *   start: { x: 5, y: 5 },
 *   end: { x: 10, y: 10 },
 * }
 * const rect = {
 *   x: 15,
 *   y: 15,
 *   width: 20,
 *   height: 50,
 * }
 *
 * const haveCollided = lineRect(
 *   line.start.x,
 *   line.start.y,
 *   line.end.x,
 *   line.end.y,
 *
 *   rect.x,
 *   rect.y,
 *   rect.width,
 *   rect.height,
 * )
 * ```
 */
export const lineRect = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    rx: number,
    ry: number,
    rw: number,
    rh: number,
): boolean => {
    // check if the line has hit any of the rectangle's sides
    // uses the Line/Line function below
    const left: boolean = lineLine(x1, y1, x2, y2, rx, ry, rx, ry + rh)
    const right: boolean = lineLine(
        x1,
        y1,
        x2,
        y2,
        rx + rw,
        ry,
        rx + rw,
        ry + rh,
    )
    const top: boolean = lineLine(x1, y1, x2, y2, rx, ry, rx + rw, ry)
    const bottom: boolean = lineLine(
        x1,
        y1,
        x2,
        y2,
        rx,
        ry + rh,
        rx + rw,
        ry + rh,
    )

    // if ANY of the above are true, the line
    // has hit the rectangle
    if (left || right || top || bottom) {
        return true
    }
    return false
}
