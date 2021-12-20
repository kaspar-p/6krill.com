/**
 * Lightens or darkens a color
 *
 * @param color The color to pass in, in hex
 * @param amount The amount (in RGB) to affect. Negative means darker.
 * @returns The resulting hex.
 */
export function lighten_darken_color(color: string, amount: number): string {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}
