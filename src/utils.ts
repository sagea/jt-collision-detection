export const dist = (
    c1x: number,
    c1y: number,
    c2x: number,
    c2y: number,
): number => {
    // use the Pythagorean Theorem to compute the distance
    const distX: number = c1x - c2x
    const distY: number = c1y - c2y
    const distance: number = Math.sqrt(distX * distX + distY * distY)
    return distance
}

/**
 * 2 dimensional Vertex
 */
export interface Vector2D {
    /** x position */
    x: number
    /** y position */
    y: number
}
