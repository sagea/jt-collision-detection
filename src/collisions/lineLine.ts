/**
 * Check if two lines intersect
 * 
 * Source: https://www.jeffreythompson.org/collision-detection/line-line.php
 * 
 * @param {number} l1x1 Line 1 starting point x poisition
 * @param {number} l1y1 Line 1 starting point y poisition
 * @param {number} l1x2 Line 1 ending point x poisition
 * @param {number} l1y2 Line 1 ending point y poisition
 * @param {number} l2x1 Line 2 starting point x poisition
 * @param {number} l2y1 Line 2 starting point y poisition
 * @param {number} l2x2 Line 2 ending point x poisition
 * @param {number} l2y2 Line 2 ending point y poisition
 * @returns {boolean}
 * 
 * @example
 * ```js
 * import { lineLine } from 'jt-collision-detection'
 * 
 * const lineA = {
 *   start: { x: 5, y: 5 },
 *   end: { x: 10, y: 10 },
 * }
 * const lineB = {
 *   start: { x: 3, y: 3 },
 *   end: { x: 15, y: 15 },
 * }
 * 
 * const haveCollided = lineLine(
 *   lineA.start.x,
 *   lineA.start.y,
 *   lineA.end.x,
 *   lineA.end.y,
 * 
 *   lineB.start.x,
 *   lineB.start.y,
 *   lineB.end.x,
 *   lineB.end.y,
 * )
 * ```
 */
export const lineLine = (
    l1x1: number,
    l1y1: number,
    l1x2: number,
    l1y2: number,
    l2x1: number,
    l2y1: number,
    l2x2: number,
    l2y2: number,
): boolean => {
    // calculate the distance to intersection point
    const uA: number =
        ((l2x2 - l2x1) * (l1y1 - l2y1) - (l2y2 - l2y1) * (l1x1 - l2x1)) /
        ((l2y2 - l2y1) * (l1x2 - l1x1) - (l2x2 - l2x1) * (l1y2 - l1y1))
    const uB: number =
        ((l1x2 - l1x1) * (l1y1 - l2y1) - (l1y2 - l1y1) * (l1x1 - l2x1)) /
        ((l2y2 - l2y1) * (l1x2 - l1x1) - (l2x2 - l2x1) * (l1y2 - l1y1))

    // if uA and uB are between 0-1, lines are colliding
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        return true
    }
    return false
}
