/**
 * Check if two rectangles intersect
 * 
 * Source: https://www.jeffreythompson.org/collision-detection/rect-rect.php
 * 
 * @param r1x Rectangle 1 x position
 * @param r1y Rectangle 1 y position
 * @param r1w Rectangle 1 width
 * @param r1h Rectangle 1 height
 * @param r2x Rectangle 2 x position
 * @param r2y Rectangle 2 y position
 * @param r2w Rectangle 2 width
 * @param r2h Rectangle 2 height
 * @returns
 * 
 * @example
 * ```js
 * import { rectRect } from 'jt-collision-detection'
 * 
 * const rectA = {
 *   x: 15,
 *   y: 15,
 *   width: 20,
 *   height: 50,
 * }
 * 
 * const rectB = {
 *   x: 20,
 *   y: 20,
 *   width: 10,
 *   height: 15,
 * }
 * 
 * const haveCollided = rectRect(
 *   rectA.x,
 *   rectA.y,
 *   rectA.width,
 *   rectA.height,
 * 
 *   rectB.x,
 *   rectB.y,
 *   rectB.width,
 *   rectB.height,
 * )
 * ```
 */
export const rectRect = (
    r1x: number,
    r1y: number,
    r1w: number,
    r1h: number,
    r2x: number,
    r2y: number,
    r2w: number,
    r2h: number,
): boolean => {
    // are the sides of one rectangle touching the other?

    if (
        r1x + r1w >= r2x && // r1 right edge past r2 left
        r1x <= r2x + r2w && // r1 left edge past r2 right
        r1y + r1h >= r2y && // r1 top edge past r2 bottom
        r1y <= r2y + r2h
    ) {
        // r1 bottom edge past r2 top
        return true
    }
    return false
}
