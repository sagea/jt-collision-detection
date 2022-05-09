import { Vector2D } from '../utils'
import { lineCircle } from './lineCircle'

/**
 * Check if a polygon and a circle intersect
 * 
 * Source: https://www.jeffreythompson.org/collision-detection/poly-circle.php
 * 
 * @param vertices polygon verticies
 * @param cx Circle x position
 * @param cy Circle y position
 * @param r Circle radius
 * @returns
 * 
 * @example
 * ```js
 * import { polyCircle } from 'jt-collision-detection'
 * 
 * const poly = [
 *  // triangle
 *  { x: 10, y: 10 },
 *  { x: 20, y: 20 },
 *  { x: 30, y: 10 },
 * ]
 * 
 * const circle = {
 *   x: 10,
 *   y: 10,
 *   radius: 5
 * }
 * 
 * const haveCollided = polyCircle(
 *   poly,
 * 
 *   circle.x,
 *   circle.y,
 *   circle.radius,
 * )
 * ```
 */
export const polyCircle = (
    vertices: Vector2D[],
    cx: number,
    cy: number,
    r: number,
): boolean => {
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

        // check for collision between the circle and
        // a line formed between the two vertices
        const collision: boolean = lineCircle(vc.x, vc.y, vn.x, vn.y, cx, cy, r)
        if (collision) return true
    }

    // the above algorithm only checks if the circle
    // is touching the edges of the polygon – in most
    // cases this is enough, but you can un-comment the
    // following code to also test if the center of the
    // circle is inside the polygon

    // boolean centerInside = polygonPoint(vertices, cx,cy);
    // if (centerInside) return true;

    // otherwise, after all that, return false
    return false
}
