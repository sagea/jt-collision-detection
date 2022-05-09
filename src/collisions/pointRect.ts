/**
 * Check if point is inside a rectangle
 * 
 * Source: https://www.jeffreythompson.org/collision-detection/point-rect.php
 * 
 * @param px point x position
 * @param py point y position
 * @param rx Rectangle x position
 * @param ry Rectangle y position
 * @param rw Rectangle width
 * @param rh Rectangle height
 * @returns
 * 
 * @example
 * ```js
 * import { pointRect } from 'jt-collision-detection'
 * 
 * const point = {
 *   x: 10,
 *   y: 10,
 * }
 * 
 * const rect = {
 *   x: 15,
 *   y: 15,
 *   width: 20,
 *   height: 50,
 * }
 * 
 * const haveCollided = pointRect(
 *   point.x,
 *   point.y,
 * 
 *   rect.x,
 *   rect.y,
 *   rect.width,
 *   rect.height,
 * )
 * ```
 */
export const pointRect = (
    px: number,
    py: number,
    rx: number,
    ry: number,
    rw: number,
    rh: number,
): boolean => {
    // is the point inside the rectangle's bounds?
    if (
        px >= rx && // right of the left edge AND
        px <= rx + rw && // left of the right edge AND
        py >= ry && // below the top AND
        py <= ry + rh
    ) {
        // above the bottom
        return true
    }
    return false
}
