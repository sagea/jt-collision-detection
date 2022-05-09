import { dist } from '../utils'

/**
 * Check if point is on line (With 10% buffer because floats aren't fully reliable)
 * 
 * Source: https://www.jeffreythompson.org/collision-detection/line-point.php
 * 
 * @param {number} x1 Line starting point x poisition
 * @param {number} y1 Line starting point y poisition
 * @param {number} x2 Line ending point x poisition
 * @param {number} y2 Line ending point y poisition
 * @param {number} px point x position 
 * @param {number} py point y position
 * @returns {boolean}
 * 
 * @example
 * ```js
 * import { linePoint } from 'jt-collision-detection'
 * 
 * const line = {
 *   start: { x: 5, y: 5 },
 *   end: { x: 10, y: 10 },
 * }
 * const point = {
 *   x: 10,
 *   y: 10,
 * }
 * 
 * const haveCollided = linePoint(
 *   line.start.x,
 *   line.start.y,
 *   line.end.x,
 *   line.end.y,
 * 
 *   point.x,
 *   point.y,
 * )
 * ```
 */
export const linePoint = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    px: number,
    py: number,
): boolean => {
    // get distance from the point to the two ends of the line
    const d1: number = dist(px, py, x1, y1)
    const d2: number = dist(px, py, x2, y2)

    // get the length of the line
    const lineLen: number = dist(x1, y1, x2, y2)

    // since floats are so minutely accurate, add
    // a little buffer zone that will give collision
    const buffer = 0.1 // higher # = less accurate

    // if the two distances are equal to the line's
    // length, the point is on the line!
    // note we use the buffer here to give a range,
    // rather than one #
    if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
        return true
    }
    return false
}
