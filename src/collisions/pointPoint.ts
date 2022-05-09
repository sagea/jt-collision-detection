/**
 * Check if two points are colliding (If two points equal eachother)
 *
 * Source: https://www.jeffreythompson.org/collision-detection/point-point.php
 *
 * @param p1x point 1 x position
 * @param p1y point 1 y position
 * @param p2x point 2 x position
 * @param p2y point 2 y position
 * @returns
 *
 * @example
 * ```js
 * import { pointPoint } from 'jt-collision-detection'
 *
 * const pointA = {
 *   x: 10,
 *   y: 10,
 * }
 *
 * const pointB = {
 *   x: 12,
 *   y: 12,
 * }
 *
 * const haveCollided = pointPoint(
 *   pointA.x,
 *   pointA.y,
 *
 *   pointB.x,
 *   pointB.y,
 * )
 * ```
 */
export const pointPoint = (
    p1x: number,
    p1y: number,
    p2x: number,
    p2y: number,
): boolean => {
    // are the two points in the same location?
    if (p1x == p2x && p1y == p2y) {
        return true
    }
    return false
}
