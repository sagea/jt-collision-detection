import { Vector2D } from '../utils'
import { lineLine } from './lineLine'

/**
 * check if a polygon and a line intersect
 * 
 * Source: https://www.jeffreythompson.org/collision-detection/poly-line.php
 * 
 * @param vertices polygon verticies
 * @param x1 Line starting point x poisition
 * @param y1 Line starting point y poisition
 * @param x2 Line ending point x poisition
 * @param y2 Line ending point y poisition
 * @returns
 * 
 * @example
 * ```js
 * import { polyLine } from 'jt-collision-detection'
 * 
 * const poly = [
 *  // triangle
 *  { x: 10, y: 10 },
 *  { x: 20, y: 20 },
 *  { x: 30, y: 10 },
 * ]
 * 
 * const line = {
 *   start: { x: 5, y: 5 },
 *   end: { x: 10, y: 10 },
 * }
 * 
 * const haveCollided = polyLine(
 *   poly,
 * 
 *   line.start.x,
 *   line.start.y,
 *   line.end.x,
 *   line.end.y,
 * )
 * ```
 */
export const polyLine = (
    vertices: Vector2D[],
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): boolean => {
    // go through each of the vertices, plus the next
    // vertex in the list
    let next = 0
    for (let current = 0; current < vertices.length; current++) {
        // get next vertex in list
        // if we've hit the end, wrap around to 0
        next = current + 1
        if (next == vertices.length) next = 0

        // get the PVectors at our current position
        // extract X/Y coordinates from each
        const x3: number = vertices[current].x
        const y3: number = vertices[current].y
        const x4: number = vertices[next].x
        const y4: number = vertices[next].y

        // do a Line/Line comparison
        // if true, return 'true' immediately and
        // stop testing (faster)
        const hit: boolean = lineLine(x1, y1, x2, y2, x3, y3, x4, y4)
        if (hit) {
            return true
        }
    }

    // never got a hit
    return false
}
