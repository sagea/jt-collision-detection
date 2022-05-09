import { Vector2D } from '../utils'
import { lineRect } from './lineRect'
import { polyPoint } from './polyPoint'

/**
 * Check if a polygon and a rectangle intersect
 *
 * Source: https://www.jeffreythompson.org/collision-detection/poly-rect.php
 *
 * @param vertices polygon verticies
 * @param rx Rectangle x position
 * @param ry Rectangle y position
 * @param rw Rectangle width
 * @param rh Rectangle height
 * @returns
 *
 * @example
 * ```js
 * import { polyRect } from 'jt-collision-detection'
 *
 * const poly = [
 *  // triangle
 *  { x: 10, y: 10 },
 *  { x: 20, y: 20 },
 *  { x: 30, y: 10 },
 * ]
 *
 * const rect = {
 *   x: 15,
 *   y: 15,
 *   width: 20,
 *   height: 50,
 * }
 *
 * const haveCollided = polyRect(
 *   poly,
 *
 *   rect.x,
 *   rect.y,
 *   rect.width,
 *   rect.height,
 * )
 * ```
 */
export const polyRect = (
    vertices: Vector2D[],
    rx: number,
    ry: number,
    rw: number,
    rh: number,
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
        // this makes our if statement a little cleaner
        const vc: Vector2D = vertices[current] // c for "current"
        const vn: Vector2D = vertices[next] // n for "next"

        // check against all four sides of the rectangle
        const collision: boolean = lineRect(
            vc.x,
            vc.y,
            vn.x,
            vn.y,
            rx,
            ry,
            rw,
            rh,
        )
        if (collision) return true

        // optional: test if the rectangle is INSIDE the polygon
        // note that this iterates all sides of the polygon
        // again, so only use this if you need to
        const inside: boolean = polyPoint(vertices, rx, ry)
        if (inside) return true
    }

    return false
}
