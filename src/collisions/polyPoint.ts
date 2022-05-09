import { Vector2D } from '../utils'

/**
 * Check if a polygon and a point intersect
 * 
 * Source: https://www.jeffreythompson.org/collision-detection/poly-point.php
 * 
 * @param vertices polygon verticies
 * @param px point x position
 * @param py point y position
 * @returns
 * 
 * @example
 * ```js
 * import { polyPoint } from 'jt-collision-detection'
 * 
 * const poly = [
 *  // triangle
 *  { x: 10, y: 10 },
 *  { x: 20, y: 20 },
 *  { x: 30, y: 10 },
 * ]
 * 
 * const point = {
 *   x: 10,
 *   y: 10,
 * }
 * 
 * const haveCollided = polyPoint(
 *   poly,
 * 
 *   point.x,
 *   point.y,
 * )
 * ```
 */
export const polyPoint = (
    vertices: Vector2D[],
    px: number,
    py: number,
): boolean => {
    let collision = false

    // go through each of the vertices, plus
    // the next vertex in the list
    let next = 0
    for (let current = 0; current < vertices.length; current++) {
        // get next vertex in list
        // if we've hit the end, wrap around to 0
        next = current + 1
        if (next == vertices.length) next = 0

        // get the PVectors at our current position
        // this makes our if statement a little cleaner
        const vc: Vector2D = vertices[current] // c for "current"
        const vn: Vector2D = vertices[next] // n for "next"

        // compare position, flip 'collision' variable
        // back and forth
        if (
            ((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
            px < ((vn.x - vc.x) * (py - vc.y)) / (vn.y - vc.y) + vc.x
        ) {
            collision = !collision
        }
    }
    return collision
}
