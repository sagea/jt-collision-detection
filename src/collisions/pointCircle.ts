import { dist } from '../utils'

/**
 * Check if a point is inside a circle
 * 
 * Source: https://www.jeffreythompson.org/collision-detection/point-circle.php
 * 
 * @param {number} px point x position
 * @param {number} py point y position
 * @param {number} cx Circle x position
 * @param {number} cy Circle y position
 * @param {number} r Circle radius
 * @returns {boolean}
 * 
 * @example
 * ```js
 * import { pointCircle } from 'jt-collision-detection'
 * 
 * const point = {
 *   x: 10,
 *   y: 10,
 * }
 * 
 * const circle = {
 *   x: 10,
 *   y: 10,
 *   radius: 5
 * }
 * 
 * const haveCollided = pointCircle(
 *   point.x,
 *   point.y,
 * 
 *   circle.x,
 *   circle.y,
 *   circle.radius,
 * )
 * ```
 */
export const pointCircle = (
    px: number,
    py: number,
    cx: number,
    cy: number,
    r: number,
): boolean => {
    // get distance between the point and circle's center
    const distance: number = dist(px, py, cx, cy)

    // if the distance is less than the circle's
    // radius the point is inside!
    if (distance <= r) {
        return true
    }
    return false
}
