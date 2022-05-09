import { Vector2D } from '../utils'
import { polyLine } from './polyLine'
import { polyPoint } from './polyPoint'

/**
 * Check if two polygons intersect
 *
 * Source: https://www.jeffreythompson.org/collision-detection/poly-poly.php
 *
 * @param p1 polygon 1 verticies
 * @param p2 polygon 2 verticies
 * @returns
 *
 * @example
 * ```js
 * import { polyPoly } from 'jt-collision-detection'
 *
 * const polyA = [
 *  // triangle
 *  { x: 10, y: 10 },
 *  { x: 20, y: 20 },
 *  { x: 30, y: 10 },
 * ]
 *
 * const polyB = [
 *  // Diamond
 *  { x: 10, y: 10 },
 *  { x: 20, y: 20 },
 *  { x: 30, y: 10 },
 *  { x: 20, y: 0 },
 * ]
 *
 * const haveCollided = polyPoly(
 *   polyA,
 *   polyB,
 * )
 * ```
 */
export const polyPoly = (p1: Vector2D[], p2: Vector2D[]): boolean => {
    // go through each of the vertices, plus the next
    // vertex in the list
    let next = 0
    for (let current = 0; current < p1.length; current++) {
        // get next vertex in list
        // if we've hit the end, wrap around to 0
        next = current + 1
        if (next == p1.length) next = 0

        // get the PVectors at our current position
        // this makes our if statement a little cleaner
        const vc: Vector2D = p1[current] // c for "current"
        const vn: Vector2D = p1[next] // n for "next"

        // now we can use these two points (a line) to compare
        // to the other polygon's vertices using polyLine()
        const collisionLine: boolean = polyLine(p2, vc.x, vc.y, vn.x, vn.y)
        if (collisionLine) return true

        // optional: check if the 2nd polygon is INSIDE the first
        const collisionPoint: boolean = polyPoint(p1, p2[0].x, p2[0].y)
        if (collisionPoint) return true
    }

    return false
}
