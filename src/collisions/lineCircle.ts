import { dist } from '../utils'
import { pointCircle } from './pointCircle'
import { linePoint } from './linePoint'

/**
 * Check if a line and circle intersect
 *
 * Source: https://www.jeffreythompson.org/collision-detection/line-circle.php
 *
 * @param {number} x1 Line starting point x poisition
 * @param {number} y1 Line starting point y poisition
 * @param {number} x2 Line ending point x poisition
 * @param {number} y2 Line ending point y poisition
 * @param {number} cx Circle x position
 * @param {number} cy Circle y position
 * @param {number} r Circle radius
 * @returns {boolean}
 *
 * @example
 * ```js
 * import { lineCircle } from 'jt-collision-detection'
 *
 * const line = {
 *   start: { x: 5, y: 5 },
 *   end: { x: 10, y: 10 },
 * }
 * const circle = {
 *   x: 10,
 *   y: 10,
 *   radius: 5
 * }
 *
 * const haveCollided = lineCircle(
 *   line.start.x,
 *   line.start.y,
 *   line.end.x,
 *   line.end.y,
 *
 *   circle.x,
 *   circle.y,
 *   circle.radius,
 * )
 * ```
 */
export const lineCircle = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    cx: number,
    cy: number,
    r: number,
): boolean => {
    // is either end INSIDE the circle?
    // if so, return true immediately
    const inside1: boolean = pointCircle(x1, y1, cx, cy, r)
    const inside2: boolean = pointCircle(x2, y2, cx, cy, r)
    if (inside1 || inside2) return true

    // get length of the line
    const len: number = dist(x1, y1, x2, y2)

    // get dot product of the line and circle
    const dot: number =
        ((cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1)) / Math.pow(len, 2)

    // find the closest point on the line
    const closestX: number = x1 + dot * (x2 - x1)
    const closestY: number = y1 + dot * (y2 - y1)

    // is this point actually on the line segment?
    // if so keep going, but if not, return false
    const onSegment: boolean = linePoint(x1, y1, x2, y2, closestX, closestY)
    if (!onSegment) return false

    // get distance to closest point
    const distance: number = dist(closestX, closestY, cx, cy)

    if (distance <= r) {
        return true
    }
    return false
}
