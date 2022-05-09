import { dist } from '../utils'

/**
 * Check two circles intersect
 *
 * source: https://www.jeffreythompson.org/collision-detection/circle-circle.php
 *
 * @param c1x Circle 1 x position
 * @param c1y Circle 1 y position
 * @param c1r Circle 1 radius
 * @param c2x Circle 2 x position
 * @param c2y Circle 2 y position
 * @param c2r Circle 2 radius
 * @returns
 *
 * @example
 * ```js
 * import { circleCircle } from 'jt-collision-detection'
 *
 * const circleA = {
 *   x: 10,
 *   y: 10,
 *   radius: 5
 * }
 * const circleB = {
 *   x: 15,
 *   y: 15,
 *   radius: 3
 * }
 *
 * const haveCollided = circleCircle(
 *   circleA.x,
 *   circleA.y,
 *   circleA.radius,
 *
 *  circleB.x,
 *  circleB.y,
 *  circleB.radius,
 * )
 * ```
 */
export const circleCircle = (
    c1x: number,
    c1y: number,
    c1r: number,
    c2x: number,
    c2y: number,
    c2r: number,
): boolean => {
    // get distance between the circle's centers
    const distance: number = dist(c1x, c1y, c2x, c2y)

    // if the distance is less than the sum of the circle's
    // radii, the circles are touching!
    if (distance <= c1r + c2r) {
        return true
    }
    return false
}
