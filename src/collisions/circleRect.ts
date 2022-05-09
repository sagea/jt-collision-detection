import { dist } from '../utils'

/**
 * Check check if a circle and a rectangle intersect
 *
 * https://www.jeffreythompson.org/collision-detection/circle-rect.php
 *
 * @param {number} cx  Circle x position
 * @param {number} cy Circle y position
 * @param {number} r Circle radius
 * @param {number} rx Rectangle x position
 * @param {number} ry Rectangle y position
 * @param {number} rw Rectangle width
 * @param {number} rh Rectangle height
 * @returns {boolean}
 *
 * @example
 * ```js
 * import { circleRect } from 'jt-collision-detection'
 *
 * const circle = {
 *   x: 10,
 *   y: 10,
 *   radius: 5
 * }
 * const rect = {
 *   x: 15,
 *   y: 15,
 *   width: 20,
 *   height: 50,
 * }
 *
 * const haveCollided = circleRect(
 *   circle.x,
 *   circle.y,
 *   circle.radius,
 *
 *   rect.x,
 *   rect.y,
 *   rect.width,
 *   rect.height,
 * )
 * ```
 */

export const circleRect = (
    cx: number,
    cy: number,
    r: number,
    rx: number,
    ry: number,
    rw: number,
    rh: number,
): boolean => {
    // temporary variables to set edges for testing
    let testX: number = cx
    let testY: number = cy

    // which edge is closest?
    if (cx < rx) testX = rx // test left edge
    else if (cx > rx + rw) testX = rx + rw // right edge
    if (cy < ry) testY = ry // top edge
    else if (cy > ry + rh) testY = ry + rh // bottom edge

    // get distance from closest edges
    const distance: number = dist(cx, cy, testX, testY)

    // if the distance is less than the radius, collision!
    if (distance <= r) {
        return true
    }
    return false
}
